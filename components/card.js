import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} card content for either circle or regular card
 */
export default function Card(props) {

    return (
        //props.style allows you to pass in custom styles
        <View style={[(props.type === 'circle' ? styles.circleCard : styles.card), props.style]}>
            {/* <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/06/28/04/49/bubbles-2449751_640.png'}} style={{flex: 1, position: 'absolute'}}/>  */}
                <View style={styles.cardContent}>
                    { props.children }
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        elevation: 3,
        backgroundColor: '#6699ff',                 //#6699ff is a light blue color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    circleCard: {
        borderRadius: 75,
        backgroundColor: "#6699ff",                 //#6699ff is a light blue color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        justifyContent:'center',
    },
    image: {
        borderRadius: 6,
    }
});
