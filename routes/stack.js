import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../components/header';
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
                name="Washroom"
                component={Home}
                options={{
                    title: 'Washroom',
                    headerTitleAlign: {textAlign:'center'},
                }}
            />
            <Stack.Screen
                name="Dorm"
                component={Dorm}
                options={{
                    title: 'Dorm',
                    headerTitleAlign: {textAlign:'center'},
                }}
            />
            <Stack.Screen
                name="Apartment"
                component={Apartment}
                options={{
                    title: 'Apartment',
                    headerTitleAlign: {textAlign:'center'},
                }}
            />
            <Stack.Screen
                name="Watcher"
                component={Watcher}
                options={{
                    title: 'Watcher',
                    headerTitleAlign: {textAlign:'center'},
                }}
            />
        </Stack.Navigator>
    );
};