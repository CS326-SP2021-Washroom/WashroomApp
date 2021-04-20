import React, { useState, useEffect } from 'react';
import {
    ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
    TextInput, Alert
} from 'react-native';

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

    const [washers, setWashers] = useState([            //Needs to be renamed, does not reference the apartments
        { title: 'Alpha', key: '1', test: true },
        { title: 'Beta', key: '2', test: true },
        { title: 'Delta', key: '3', test: false },
        { title: 'Gamma', key: '4', test: true },
    ])

    // {[(true === true ? 'green' : 'red'), props.style]} POSSIBLE WORK FOR THE CARD COLOR
    var color = 'green'
    {() => {if (false) {color =  'green'} else {color =  'red'}}}
    // if (false) {color =  'green'} else {color =  'red'}
    return (
        <Styler>
            
            <View style={globalStyles.containerAcross}>
                <View style={globalStyles.container}>
                    <Text style={globalStyles.titleText}> Washers! </Text>
                    <FlatList style={globalStyles.list} data={washers} renderItem={({ item }) => (
                        <View>
                            <Card style= {{backgroundColor: (item.test ? 'green' : 'red')}}>
                                {item.title}
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
                    <Text style={globalStyles.titleText}>Dryers!</Text>
                    <FlatList style={globalStyles.list} data={washers} renderItem={({ item }) => (
                        <View>
                            <Text style={globalStyles.subtitleText}>{item.title}</Text>
                            <CountDown
                                until={0}
                                // onFinish={() => alert('Finished')}
                                onPress={() => alert('Hello World')}
                                size={20}
                                timeToShow={['M', 'S']}
                                digitStyle={globalStyles.digitStyleDryer}
                                digitTxtStyle={globalStyles.digitTextStyleDryer}
                            />
                        </View>
                    )} />
                </View>
            </View>
        </Styler>
    );
}
