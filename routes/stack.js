import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialIcons} from '@expo/vector-icons';
import Home from '../screens/home';
import Dorm from '../screens/dormPicker';
import Watcher from '../screens/watcher';
import Apartment from '../screens/apartPicker';

const Stack = createStackNavigator();

/** 
 * Stack creates stack for screen navigation, one screen for navigation accross the app 
 * @author Andrew Baker (andrewJamesBaker)
 * @default {Home}
 * @param {var} navigation
 * @return {property} Navigator
 *
 * Creates a single stack for the screens within the app, letting the user go from home to either dorm or apartment and finally to a specific watcher screen.
 * Specifies flow of screens and the alignment of title for each screen.
 */

// Creates the navigator, called in app.js
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
                    title: "Machine Status",            //Rename for the header, Machine Status seemed easier to understand than Watcher
                    headerTitleAlign: {textAlign:'center'},
                })}
            />
        </Stack.Navigator>
    );
};




