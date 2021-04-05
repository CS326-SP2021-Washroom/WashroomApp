import React, { useState, useEffect } from 'react';
import {
  ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
  TextInput, Alert
} from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../components/globalStyle'
import Styler from '../components/styler'

/**
 * Dorm displays dorm picker screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {HomeStack} Dorm screen allowing for for users to pick the dorm.
 */

export default function Dorm({ navigation }) {

  const [maleDorms, setMaleDorms] = useState([
    { title: 'Bolt', key: '1' },
    { title: 'Huzienga', key: '2' },
    { title: 'Shultze', key: '3' },
    { title: 'Van Dellen', key: '4' },
    { title: 'Beets', key: '5' },
    { title: 'VanderWerp', key: '6' },
    { title: 'Boer', key: '7' },
  ])

  const [femaleDorms, setFemaleDorms] = useState([
    { title: 'Heyns', key: '1' },
    { title: 'Kalsbeek', key: '2' },
    { title: 'Eldersveld', key: '3' },
    { title: 'Rooks', key: '4' },
    { title: 'Veenstra', key: '5' },
    { title: 'Noordwier', key: '6' },
    { title: 'Bennick', key: '7' },
  ])

  const [extraDorms, setExtraDorms] = useState([
    { title: 'Timmer', key: '1' },
    { title: 'Van Reken', key: '2' },
  ])

  return (
    <Styler>
      <View style={globalStyles.containerAcross}>
        <FlatList style={globalStyles.list} data={maleDorms} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher')}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />

        <FlatList style={globalStyles.list} data={femaleDorms} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher')}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />

        <FlatList style={globalStyles.list} data={extraDorms} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher')}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />
      </View>
    </Styler>
  );
}
