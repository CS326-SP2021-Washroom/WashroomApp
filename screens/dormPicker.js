import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
    TextInput, Alert } from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';


/**
 * Home displays Home screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {HomeStack} Home screen with info based on user info
 */

export default function Dorm({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>hello</Text>
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
  