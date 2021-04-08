import React, { useState, useEffect } from 'react';
import {
    ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
    TextInput, Alert, AsyncStorage
} from 'react-native';

// import { AsyncStorage } from '@react-native-community/async-storage'
import Card from '../components/card';
import { globalStyles } from '../components/globalStyle'
import CountDown from 'react-native-countdown-component'
import { FlatList } from 'react-native-gesture-handler';
import Styler from '../components/styler'
import * as Mqtt from 'react-native-native-mqtt'
import init from "react_native_mqtt"

export default function Watcher({ navigation }) {

    init({
        size: 10000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
        reconnect: true,
        sync : {
        }
      });
      
      function onConnect() {
        console.log("onConnect");
      }
      
      function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
          console.log("onConnectionLost:"+responseObject.errorMessage);
        }
      }
      
      function onMessageArrived(message) {
        console.log("onMessageArrived:"+message.payloadString);
      }
      
      const client = new Paho.MQTT.Client('test.mosquitto.org', 1883, 'ajb247');
      client.onConnectionLost = onConnectionLost;
      client.onMessageArrived = onMessageArrived;
      client.connect({ onSuccess:onConnect, useSSL: true });


    const [washers, setWashers] = useState([            //Needs to be renamed, does not reference the apartments
        { title: 'Alpha', key: '1' },
        { title: 'Beta', key: '2' },
        { title: 'Delta', key: '3' },
        { title: 'Gamma', key: '4' },
    ])

    return (
        <Styler>
            <View style={globalStyles.containerAcross}>
                <View style={globalStyles.container}>
                    <Text style={globalStyles.titleText}> Washers! </Text>
                    <FlatList style={globalStyles.list} data={washers} renderItem={({ item }) => (
                        <View>
                            <Text style={globalStyles.subtitleText}>{item.title}</Text>
                            <CountDown
                                until={0}
                                // onFinish={() => alert('Finished')}
                                onPress={() => alert('Hello World')}
                                size={20}
                                timeToShow={['M', 'S']}
                                digitStyle={globalStyles.digitStyleWasher}
                                digitTxtStyle={globalStyles.digitTextStyleWasher}
                            />
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
