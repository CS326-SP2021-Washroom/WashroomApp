import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} card content for either circle or regular card
 */
export default function Bar(props) {

    return (
        //props.style allows you to pass in custom styles
        <View style={[(props.type === 'circle' ? styles.circleCard : styles.card), props.style]}>
                <View style={styles.cardContent}>
                    { props.children }
                </View>
        </View>
    );
}