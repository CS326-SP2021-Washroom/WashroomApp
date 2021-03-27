import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
    TextInput, Alert } from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../components/globalStyle'

const background = { uri: "https://calvin.edu/contentAsset/image/25cbc0c3-c2c7-438b-8abf-4bd1ebb61d95/featureImage/filter/Jpeg/jpeg_q/80" };

/**
 * Home displays Home screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} Home screen with info based on user info
 */

export default function Home({ navigation }) {

    return (
        <View style={globalStyles.container}>

            <View style={{flex:1, alignItems: 'stretch'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Dorm')}>
                    <Card>
                        <Text>Dorm</Text>
                    </Card>
                </TouchableOpacity>
            </View>

            <View style={{flex:1, alignItems: 'stretch'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Apartment')}>
                    <Card>
                        <Text>Knollcrest East</Text>
                    </Card>
                </TouchableOpacity>
            </View> 
        </View>
    );
}

  