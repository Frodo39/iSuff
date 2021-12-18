import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import DeckSquare from "../components/DeckSquare";

const ChooseDeck = () => {

    return(
        <View style={styles.chooseDeck}>
            <DeckSquare></DeckSquare>
            <DeckSquare></DeckSquare>
            <DeckSquare></DeckSquare>
            <DeckSquare></DeckSquare>

        </View>
    )

}

const styles = StyleSheet.create({
    chooseDeck: {
        marginBottom: 20,
        minWidth: 300,
        minHeight: 100,
        backgroundColor: "#04005E",
        borderColor: "#E92EFB",
        borderRadius: 5,
        borderWidth: 2,  
        flexDirection: "row",
        flexWrap: "wrap",  
    },
    theme:{
        fontSize: 30,
        color:  "#fff",
    },
    karten: {
        fontSize: 20,
        color:  "#fff",
    }

})

export default ChooseDeck;