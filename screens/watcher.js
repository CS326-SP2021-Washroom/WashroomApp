import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../components/globalStyle'
import CountDown from 'react-native-countdown-component'
import { FlatList } from 'react-native-gesture-handler';
import Styler from '../components/styler'
import Paho from '../components/paho-mqtt'

export default function Watcher({ navigation }) {

    client = new Paho.Client(host = 'mqtt.eclipseprojects.io/mqtt', port = 80, clientId = 'washroom');
    client.onMessageArrived = onMessageArrived;
    var options = {
        useSSL: false,
        keepAliveInterval: 60,
        onSuccess: onConnect,
    };
    client.connect(options);
    function onConnect() {
        console.log("Connected!");
        client.subscribe("cs326/message");
    }
    function onMessageArrived(message) {
        console.log("Message Arrived:" + message.payloadString);
        document.getElementById("msg").innerHTML = message.payloadString;
    }

    const [washers, setWashers] = useState([            //Needs to be renamed, does not reference the apartments
        { title: 'Washer 1:', key: '1', test: true },
        { title: 'Washer 2:', key: '2', test: true },
        { title: 'Washer 3:', key: '3', test: false },
        { title: 'Washer 4:', key: '4', test: true },
    ])

    return (
        <Styler>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.1.0/paho-mqtt.js" type="text/javascript"></script> */}

            <View style={globalStyles.containerAcross}>
                <View style={globalStyles.container}>
                    <Text style={globalStyles.titleText}> Washers </Text>
                    <FlatList style={globalStyles.list} data={washers} renderItem={({ item }) => (
                        <View>
                            <Card style={{ backgroundColor: (item.test ? 'green' : 'red') }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    {item.title}
                                    {item.test ? 'OFF' : 'ON'}
                                </Text>
                            </Card>
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
                <View style={globalStyles.container}>
                    <Text style={globalStyles.titleText}>Dryers</Text>
                    <FlatList style={globalStyles.list} data={washers} renderItem={({ item }) => (
                        <View>
                            <Card style={{ backgroundColor: (item.test ? 'green' : 'red') }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    {item.title}
                                    {item.test ? 'OFF' : 'ON'}
                                </Text>
                            </Card>
                            {/* <Text style={globalStyles.subtitleText}>{item.title}</Text>
                            <CountDown
                                until={0}
                                // onFinish={() => alert('Finished')}
                                onPress={() => alert('Hello World')}
                                size={20}
                                timeToShow={['M', 'S']}
                                digitStyle={globalStyles.digitStyleDryer}
                                digitTxtStyle={globalStyles.digitTextStyleDryer}
                            /> */}
                        </View>
                    )} />
                </View>
            </View>
        </Styler>
    );
}
