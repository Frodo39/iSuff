import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const DeckSquare = () => {

    return(
        <View style={styles.deckSquare}>
            <Text style={styles.theme}>Basic</Text>
            <Text style={styles.karten}>Karten: 20</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    deckSquare: {
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

export default DeckSquare;