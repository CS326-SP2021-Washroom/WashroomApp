import React from 'react';
import { View, ImageBackground } from 'react-native';
import { globalStyles } from '../components/globalStyle'

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} wrapper for screens to easily add backgrounds
 */

  const background = {uri: 'https://images.pexels.com/photos/2853937/pexels-photo-2853937.jpeg?cs=srgb&dl=water-bubbles-2853937.jpg&fm=jpg'}
  // Background image for use on all screens using the styler.

export default function Card(props) {

    return (
        //styling for the background screen, optional blurRadius not channged.
        <View style={{flex: 1}}>
            <ImageBackground source={background} style={globalStyles.background} blurRadius = {0}>
                {props.children}
            </ImageBackground>
        </View>
    );
}
