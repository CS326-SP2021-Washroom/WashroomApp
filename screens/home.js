import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
    TextInput, Alert } from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Home displays Home screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {HomeStack} Home screen with info based on user info
 */

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Card style={{flex: 1, marginHorizontal: 20, marginVertical: 20}}>
                <TouchableOpacity>
                <Text>Dorm</Text>
                </TouchableOpacity>
            </Card>
            <Card style={{flex: 1, marginHorizontal: 20, marginVertical: 20}}>
                <TouchableOpacity>
                <Text>Knollcrest East</Text>
                </TouchableOpacity>
            </Card>
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  });
  