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

  const[maleDorms, setMaleDorms] = useState([
    {title: 'Bolt', key: '1'},
    {title: 'Huzienga', key: '2'},
    {title: 'Shultze', key: '3'},
    {title: 'Van Dellen', key: '4'},
    {title: 'Beets', key: '5'},
    {title: 'VanderWerp', key: '6'},
    {title: 'Boer', key: '7'},
  ])

  const[femaleDorms, setFemaleDorms] = useState([
    {title: 'Heyns', key: '1'},
    {title: 'Eldersveld', key: '2'},
    {title: 'Eldersveld', key: '3'},
    {title: 'Rooks', key: '4'},
    {title: 'Veenstra', key: '5'},
    {title: 'Noordwier', key: '6'},
    {title: 'Bennick', key: '7'},
  ])

  const[extraDorms, setExtraDorms] = useState([
    {title: 'Timmer', key: '1'},
    {title: 'Van Reken', key: '2'},
  ])

  return (
    <View style={styles.containerAcross}>
      <View style={styles.containter}>
        <FlatList data={maleDorms} renderItem={({ item }) => (
          <TouchableOpacity>
              <Card style={{marginHorizontal: 20, marginVertical: 20}}>
                  <Text>{ item.title }</Text>
              </Card>
          </TouchableOpacity>
        )}/>
      </View>

      <View style={styles.containter}>
        <FlatList data={femaleDorms} renderItem={({ item }) => (
          <TouchableOpacity>
              <Card style={{marginHorizontal: 20, marginVertical: 20}}>
                  <Text>{ item.title }</Text>
              </Card>
          </TouchableOpacity>
        )}/>
      </View>

      <View style={styles.containter}>
        <FlatList data={extraDorms} renderItem={({ item }) => (
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
    },
    containerAcross: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  