import React, { useState, useEffect } from 'react';
import {
  ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
  TextInput, Alert
} from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import Styler from '../components/styler'
import { globalStyle } from '../components/globalStyle'       //won't import properly




export default function Settings({ navigation }) {

  return (
    <Styler>
      <View style={styles.bar}>
        <Text style={styles.barContent}>Settings</Text>
      </View>
      {/* <TouchableOpacity style={{ flex: 1 }} onPress={() => {mqtt.connect('mqtt://test.mosquitto.org') }> */}
      <Card>
        <Text>Dorms</Text>
      </Card>
      {/* </TouchableOpacity>   */}
    </Styler>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#6699ff",
    alignItems: 'stretch',
    opacity: 0.7,
    // marginVertical: 15,
  },
  barContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    // color: colorCodes.cardText,
    textAlign: 'center',
  },
})