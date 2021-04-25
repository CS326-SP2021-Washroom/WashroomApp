import React, { useState, useEffect } from 'react';
import { View, Text, Alert, RefreshControl } from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../components/globalStyle'
import CountDown from 'react-native-countdown-component'
import { FlatList } from 'react-native-gesture-handler';
import Styler from '../components/styler'
import Paho from '../components/paho-mqtt'

/**
 * Watcher displays current washroom data
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} 
 */

export default function Watcher({ route, navigation }) {

    var [machines] = useState([
        { title: 'Washer 1:', key: '1', test: true },
        { title: 'Washer 2:', key: '2', test: true },
        { title: 'Dryer 1:', key: '3', test: true },
        { title: 'Dryer 2:', key: '4', test: true },
    ])

    client = new Paho.Client(host = 'iot.cs.calvin.edu', port = 8083, clientId = 'washroom');   //Creates new client that connects to host (calvin IoT) on specific port
    client.onMessageArrived = onMessageArrived;     //Defines reaction to a new message 
    client.onConnectionLost = onConnectionLost;
    var options = {     //options for the MQTT connection
        useSSL: true,
        keepAliveInterval: 60,
        onSuccess: onConnect,
        onFailure: onFail,
        password: 'piot',
        userName: 'cs326',
    };
    client.connect(options);

    //On connection success to the host
    function onConnect() {
        console.log("Connected!");
        client.publish("cs326/washroom/" + route.params + "/request", "request")   //Sends request message to the backend raspberry pi in a different topic to avoid confusion in the data interpreter. 
        client.subscribe("cs326/washroom/" + route.params);   //Subscribe to the apartment or dorms topic
    }

    // On failure to connect to the host
    function onFail(context) {
        console.log(context);
        console.log("Connection failed!");
        // on screen pop up to show failure to connect
        Alert.alert('Failure to Connect',
            "Unable to connect to host. Try again later.",
            [
                { text: "OK" }
            ],
        )
    }

    // Called when a message arrives from the subscribed topic, interprets the data coming in from the sensor source
    function onMessageArrived(message) {
        console.log("Message Arrived:" + message.payloadString);
        // console.log(message.payloadString.length)
        if (message.payloadString.length == 4) {            // Confirm that the string is no longer than 4 char long, make sure invalid data is not being read in. 
            for (i = 0; i < message.payloadString.length; i++) {
                if (message.payloadString[i] == '1') {
                    machines[i].test = false
                } else {
                    machines[i].test = true
                }
            }
        }
    }

    // called when the client loses its connection. Originally had an alert for loss of connection, but with refreshing options and shifting between dorms and apartments, the message popped up to much.
    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Connection Lost:" + responseObject.errorMessage);
            // Alert.alert('Connection Lost',
            //     "Connection to host lost. Try again later.",
            //     [
            //         { text: "OK" }
            //     ],
            // )
        }
    }

    // Code for the refresh element in the flat list. Creates a wait time for the refresh. 
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    // Refresh state, false when not currently refreshing, true when in the refreshing state.
    const [refreshing, setRefreshing] = React.useState(false);

    // Refresh function called in the flatlist, sets refreshing to true, waits for 2000 milliseconds and then returns refreshing back to false. 
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <Styler>
            <View style={globalStyles.containerAcross}>
                <View style={globalStyles.container}>
                    <FlatList style={globalStyles.list} data={machines} refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />} renderItem={({ item }) => (
                            <View>
                                <Card style={{ backgroundColor: (item.test ? 'green' : 'red') }}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        {item.title}
                                        {item.test ? 'OFF' : 'ON'}
                                    </Text>
                                </Card>
                                {/* TIMER CODE, SCRAPPED DUE TO TIME AND COMPLEXITY WITH THE SENSOR SETUP. */}
                                {/* <Text style={globalStyles.subtitleText}>{item.title}</Text>
                            <CountDown
                                until={0}
                                // onFinish={() => alert('Finished')}
                                onPress={() => alert('Hello World')}
                                size={20}
                                timeToShow={['M', 'S']}
                                digitStyle={globalStyles.digitStyleWasher}
                                digitTxtStyle={globalStyles.digitTextStyleWasher}
                            /> */}
                            </View>
                        )} />

                </View>
            </View>
        </Styler>
    );
}
