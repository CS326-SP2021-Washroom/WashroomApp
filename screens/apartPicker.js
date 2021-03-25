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

export default function Apartment({ navigation }) {

  const[apartments, setApartments] = useState([
    {title: 'Alpha', key: '1'},
    {title: 'Beta', key: '2'},
    {title: 'Delta', key: '3'},
    {title: 'Gamma', key: '4'},
    {title: 'Kappa', key: '5'},
    {title: 'Theta', key: '6'},
    {title: 'Epsilon', key: '7'},
    {title: 'Phi', key: '8'},
    {title: 'Chi', key: '9'},
    {title: 'Zeta', key: '10'},
    {title: 'Lambda', key: '11'},
  ])

  return (
    <View style={styles.containerAcross}>
      <View style={styles.containter}>
        <FlatList data={apartments} renderItem={({ item }) => (
          <TouchableOpacity>
              <Card style={{marginHorizontal: 20, marginVertical: 20}}>
                  <Text>{ item.title }</Text>
              </Card>
          </TouchableOpacity>
        )}/>
      </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
    //   alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    containerAcross: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  