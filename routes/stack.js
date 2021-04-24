import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialIcons} from '@expo/vector-icons';
import Home from '../screens/home';
import Dorm from '../screens/dormPicker';
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
                })}
            />
            <Stack.Screen
                name="Dorm"
                component={Dorm}
                options={({navigation}) => ({
                    headerTitleAlign: {textAlign:'center'},
                })}
            />
            <Stack.Screen
                name="Apartment"
                component={Apartment}
                options={({navigation}) => ({
                    headerTitleAlign: {textAlign:'center'},
                })}
            />
            <Stack.Screen
                name="Watcher"
                component={Watcher}
                options={({navigation}) => ({
                    title: "Machine Status",
                    headerTitleAlign: {textAlign:'center'},
                })}
            />
        </Stack.Navigator>
    );
};




