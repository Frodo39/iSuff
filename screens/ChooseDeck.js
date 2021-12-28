import React from "react";
import {View, Text, StyleSheet} from "react-native";

import DeckSquare from "../components/DeckSquare";

const ChooseDeck = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                 <Text style={styles.title}>Deck wählen</Text>
            </View>
            <View  style={styles.deckcontainer}>
                <DeckSquare kartenName="Basic" kartenAnzahl="20" onPress={() => navigation.navigate("FragenScreen")}></DeckSquare>
                <DeckSquare kartenName="Spicey" kartenAnzahl="20"  onPress={() => navigation.navigate("FragenScreen")}></DeckSquare>
                <DeckSquare kartenName="Gaming" kartenAnzahl="20"  onPress={() => navigation.navigate("FragenScreen")}></DeckSquare>
                <DeckSquare kartenName="Alle" kartenAnzahl="60"  onPress={() => navigation.navigate("FragenScreen")}></DeckSquare>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#050248',
        alignItems: 'center',
        justifyContent: 'center',
      },
    deckcontainer:{
        width:"85%",
        flex: 4,
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#ffffff",
      },
      textContainer:{
          flex:1,
          paddingTop:"15%",
      }

})

export default ChooseDeck;