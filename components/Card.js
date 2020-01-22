import React from 'react';
import { View, StyleSheet } from "react-native";

const Card = props => {
    //using spread operator to print of the k/v pairs and then add any new k/v pairs to the object 
    return <View style={{ ...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        // android only 
        elevation: 8,
        padding: 20,
        //note
        borderRadius: 10
    }
})

export default Card