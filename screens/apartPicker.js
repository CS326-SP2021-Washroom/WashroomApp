import React, { useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../components/globalStyle'
import Styler from '../components/styler'

/**
 * Apartment displays the apartment picker
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} Apartment picker screen with info based on user info
 */

export default function Apartment({ navigation }) {

  // Apartment options, broken up into the courtyard apartments and non-courtyards, so to not have one giant list, similiar to the dorms 
  const [apartments] = useState([
    { title: 'Theta', key: '1' },
    { title: 'Epsilon', key: '2' },
    { title: 'Phi', key: '3' },
    { title: 'Chi', key: '4' },
    { title: 'Zeta', key: '5' },
    { title: 'Lambda', key: '6' },
  ])

  const [courtyards] = useState([
    { title: 'Alpha', key: '1' },
    { title: 'Beta', key: '2' },
    { title: 'Delta', key: '3' },
    { title: 'Gamma', key: '4' },
    { title: 'Kappa', key: '5' },
  ])

  // shows two lists of buttons, navigating to the washroom watcher
  return (
    <Styler>
      <View style={globalStyles.containerAcross}>
        <FlatList style={globalStyles.list} data={courtyards} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher', item.title)}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />

        <FlatList style={globalStyles.list} data={apartments} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher', item.title)}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />

      </View>
    </Styler>
  );
}
