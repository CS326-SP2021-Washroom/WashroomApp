import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialIcons} from '@expo/vector-icons';
import Home from '../screens/home';
import Dorm from '../screens/dormPicker';
import Settings from '../screens/settings';
import Watcher from '../screens/watcher';
import Apartment from '../screens/apartPicker';

const Stack = createStackNavigator();

/** 
 * HomeStack creates stack for home screen navigation 
 * @author Andrew Baker (andrewJamesBaker)
 * @default {Home}
 * @param {var} navigation
 * @return {property} Navigator
 */
export default function Navigator( {navigation} ) {

    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#6699ff'}
        }}>
            <Stack.Screen
                name="Calvin Washroom"
                component={Home}
                options={({navigation}) => ({
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => (
                        <MaterialIcons name="settings" size={27} color='#333' style={{paddingRight: 15}}
                        onPress={() => navigation.navigate('Settings')}/>       //navigation returns an error
                    ),
                })}
            />
            <Stack.Screen
                name="Dorm"
                component={Dorm}
                options={({navigation}) => ({
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => (
                        <MaterialIcons name="settings" size={27} color='#333' style={{paddingRight: 15}}
                        onPress={() => navigation.navigate('Settings')}/>
                    ),
                })}
            />
            <Stack.Screen
                name="Apartment"
                component={Apartment}
                options={({navigation}) => ({
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => (
                        <MaterialIcons name="settings" size={27} color='#333' style={{paddingRight: 15}}
                        onPress={() => navigation.navigate('Settings')}/>
                    ),
                })}
            />
            <Stack.Screen
                name="Watcher"
                component={Watcher}
                options={({navigation}) => ({
                    title: 'Watcher',
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => (
                        <MaterialIcons name="settings" size={27} color='#333' style={{paddingRight: 15}} onPress={() => navigation.navigate('Settings')}/>
                    ),
                })}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerTitleAlign: {textAlign:'center'},
                }}
            />
        </Stack.Navigator>
    );
};




