import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../components/header';
import Home from '../screens/home';
import Dorm from '../screens/dormPicker';
import Settings from '../screens/settings';
import Watcher from '../screens/watcher';

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
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};