import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { globalStyles } from '../components/globalStyle'

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} card content for either circle or regular card
 */

  const background = {uri: 'https://images.pexels.com/photos/2853937/pexels-photo-2853937.jpeg?cs=srgb&dl=water-bubbles-2853937.jpg&fm=jpg'}
//   const background = { uri: 'https://th.bing.com/th/id/Rb317c75608fa6b82c33e10290e8a2d90?rik=PW9YtQ90Ov9ywg&riu=http%3a%2f%2fwww.allwhitebackground.com%2fimages%2f7%2fBubbles-Background-Free-Picture.jpg&ehk=oF9M0A9T8qg%2bWp5i%2bgNK%2b16KxuJs0cIjnEWFDrD%2byEM%3d&risl=&pid=ImgRaw' }


export default function Card(props) {

    return (
        //props.style allows you to pass in custom styles
        <View>
            <ImageBackground source={background} style={globalStyles.background}>
                {props.children}
            </ImageBackground>
        </View>
    );
}
