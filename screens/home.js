import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../components/globalStyle'
import Styler from '../components/styler'

/**
 * Home displays Home screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} Home screen with buttons for apartments or dorms
 */

export default function Home({ navigation }) {

    return (
        <Styler>
            <View style={globalStyles.container}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Dorm')}>
                    <Card>
                        <Text style={globalStyles.titleText}>Dorms</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Apartment')}>
                    <Card>
                        <Text style={globalStyles.titleText}>Knollcrest East</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        </Styler>
    );
}

