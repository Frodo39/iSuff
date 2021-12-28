import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const DeckSquare = ({kartenName, kartenAnzahl, onPress}) => {

    return(
        <TouchableOpacity >
            <View style={styles.deckSquare} onStartShouldSetResponder={onPress}>
                <Text style={styles.theme}>{kartenName}</Text>
                <Text style={styles.karten}>Karten: {kartenAnzahl}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    deckSquare: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 20,
        width: "100%",
        minHeight: 80,
        backgroundColor: "#04005E",
        borderColor: "#E92EFB",
        borderRadius: 5,
        borderWidth: 2,  
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