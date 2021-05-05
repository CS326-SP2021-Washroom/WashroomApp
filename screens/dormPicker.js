import React, { useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
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

  // Dorm names, split into male, female, and special so that the list will be split into a manageable screen rather than a list
  // Double name dorms (example: Van Dellen) have had the spaces taken out so they can be used as topics for mqtt messages
  // The dorms have been positioned so that each is right next to its actual, adjoining dorm (example: Bolt-Heyns-Timmer)
  const [maleDorms] = useState([
    { title: 'Bolt', key: '1' },
    { title: 'Huzienga', key: '2' },
    { title: 'Shultze', key: '3' },
    { title: 'VanDellen', key: '4' },
    { title: 'Beets', key: '5' },
    { title: 'VanderWerp', key: '6' },
    { title: 'Boer', key: '7' },
  ])

  const [femaleDorms] = useState([
    { title: 'Heyns', key: '1' },
    { title: 'Kalsbeek', key: '2' },
    { title: 'Eldersveld', key: '3' },
    { title: 'Rooks', key: '4' },
    { title: 'Veenstra', key: '5' },
    { title: 'Noordwier', key: '6' },
    { title: 'Bennick', key: '7' },
  ])

  const [extraDorms] = useState([
    { title: 'Timmer', key: '1' },
    { title: 'VanReken', key: '2' },
  ])

// Shows three lists of buttons, navigating to the washroom watcher
// On navigation the watcher is passed the name of the dorm, so that it can request and recieve from the proper MQTT topic. 
  return (
    <Styler>
      <View style={globalStyles.containerAcross}>
        <FlatList style={globalStyles.list} data={maleDorms} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher', item.title)}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />

        <FlatList style={globalStyles.list} data={femaleDorms} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Watcher', item.title)}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )} />

        <FlatList style={globalStyles.list} data={extraDorms} renderItem={({ item }) => (
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
