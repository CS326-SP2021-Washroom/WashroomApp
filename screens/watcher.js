import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../components/globalStyle'
import CountDown from 'react-native-countdown-component'
import { FlatList } from 'react-native-gesture-handler';
import Styler from '../components/styler'

export default function Watcher({ navigation }) {
    // ##########################################################################


    // ################################################################################
    // const client = new Mqtt.Client('mqtt://iot.cs.calvin.edu:8883');
    // client.connect({
    //     clientId: 'ajb247/app',
    //     username: 'cs326',
    //     password: 'piot'
    // }, err => {});

    // client.on(Mqtt.Event.Message, (topic, message) => {
    //     console.log('Mqtt Message:', topic, message.toString());
    // });

    // client.on(Mqtt.Event.Connect, () => {
    //     console.log('MQTT Connect');
    //     client.subscribe(['ajb247/app'], [0]);
    // });

    // client.on(Mqtt.Event.Error, (error) => {
    //     console.log('MQTT Error:', error);
    // });

    // client.on(Mqtt.Event.Disconnect, (cause) => {
    //     console.log('MQTT Disconnect:', cause);
    // });
    // ################################################################################

    // var mqtt = require('mqtt')
    // var client = mqtt.connect({host: 'test.mosquitto.org'})

    // client.on('connect', function () {
    //     client.subscribe('presence', function (err) {
    //         if (!err) {
    //             client.publish('presence', 'Hello mqtt')
    //         }
    //     })
    // })

    // client.on('message', function (topic, message) {
    //     // message is Buffer
    //     console.log(message.toString())
    //     client.end()
    // })

    // #################################################################################

    var ascoltatori = require('ascoltatori');
    settings = {
        type: 'mqtt',
        json: false,
        mqtt: require('mqtt'),
        url: 'mqtt://test.mosquitto.org:1883'
    };

    ascoltatori.build(settings, function (err, ascoltatore) {
        // subscribes to a topic
        ascoltatore.subscribe('hello', function () {
            console.log(arguments);
            // { '0': 'hello', '1': 'a message' }
        });

        // publishes a message to the topic 'hello'
        ascoltatore.publish('hello', 'a message', function () {
            console.log('message published');
        });
    });

    const [washers, setWashers] = useState([            //Needs to be renamed, does not reference the apartments
        { title: 'Washer 1:', key: '1', test: true },
        { title: 'Washer 2:', key: '2', test: true },
        { title: 'Washer 3:', key: '3', test: false },
        { title: 'Washer 4:', key: '4', test: true },
    ])

    return (
        <Styler>

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
