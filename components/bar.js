import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} bar, similiar to the card, not utilized in the final rendition of the project
 */
export default function Bar(props) {

    return (
        //props.style allows you to pass in custom styles
        <View style={styles.bar}>
                <View style={styles.barContent}>
                    { props.children }
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
      backgroundColor: "#6699ff",
      alignItems: 'stretch',
      opacity: 0.7,
      // marginVertical: 15,
    },
    barContent: {
      marginHorizontal: 18,
      marginVertical: 20,
      fontSize: 18,
      fontWeight: 'bold',
      // color: colorCodes.cardText,
      textAlign: 'center',
    },
  })