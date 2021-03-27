import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../components/globalStyle'

/**
 * Apartment displays the apartment picker
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} Apartment picker screen with info based on user info
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

        <FlatList style={globalStyles.list} data={apartments} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher')}>
              <Card>
                  <Text>{ item.title }</Text>
              </Card>
          </TouchableOpacity>
        )}/>

    );
}
  