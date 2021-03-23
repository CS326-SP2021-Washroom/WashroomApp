import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
    TextInput, Alert } from 'react-native';
import Card from '../components/card';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

const background = { uri: "https://calvin.edu/contentAsset/image/25cbc0c3-c2c7-438b-8abf-4bd1ebb61d95/featureImage/filter/Jpeg/jpeg_q/80" };

/**
 * Home displays Home screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {HomeStack} Home screen with info based on user info
 */

export default function Home({ navigation }) {

    const[places, setPlaces] = useState([
        {title: 'Dorms', key: '1'},
        {title: 'Knollcrest East', key: '2', group: ["Alpha", "Beta", "Delta", "Gamma", "Kappa", "Theta", "Epsilon", "Phi", "Chi", "Zeta", "Lambda"]},
    ])

    return (
        <View style={styles.container}>

            {/* <FlatList data={places} renderItem={({ item }) => (
                <TouchableOpacity>
                    <Card style={{marginHorizontal: 20, marginVertical: 20}}>
                        <Text>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )}/> */}

            <TouchableOpacity onPress={() => navigation.navigate('Dorm')}>
                <Card image={background}>
                    <Text>Dorm</Text>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Dorm')}>
                <Card>
                    <Text>Knollcrest East</Text>
                </Card>
            </TouchableOpacity> 
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
  