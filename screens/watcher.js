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

    const [washers, setWashers] = useState([
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
