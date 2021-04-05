import React, { useState, useEffect } from 'react';
import {
    ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
    TextInput, Alert
} from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../components/globalStyle'
import Styler from '../components/styler'

// const background = {uri: 'https://images.pexels.com/photos/2853937/pexels-photo-2853937.jpeg?cs=srgb&dl=water-bubbles-2853937.jpg&fm=jpg'}
const background = { uri: 'https://th.bing.com/th/id/Rb317c75608fa6b82c33e10290e8a2d90?rik=PW9YtQ90Ov9ywg&riu=http%3a%2f%2fwww.allwhitebackground.com%2fimages%2f7%2fBubbles-Background-Free-Picture.jpg&ehk=oF9M0A9T8qg%2bWp5i%2bgNK%2b16KxuJs0cIjnEWFDrD%2byEM%3d&risl=&pid=ImgRaw' }

/**
 * Home displays Home screen
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Stack} Home screen with info based on user info
 */

export default function Home({ navigation }) {

    return (
        <View style={globalStyles.container}>
            <Styler>
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
                </Styler>
        </View>
    );
}

