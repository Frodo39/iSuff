import React from "react";
import {View, Text, StyleSheet} from "react-native";

import DeckSquare from "../components/DeckSquare";
import Fragen from "../data/Fragen.json";
 

const ChooseDeck = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                 <Text style={styles.title}> Deck wählen</Text>
            </View>
            <View  style={styles.deckcontainer}>
                <DeckSquare kartenName="Basic" kartenAnzahl={Fragen.Basic.length} onPress={() => navigation.navigate("FragenScreen", {chosenDeck: "Basic",})}></DeckSquare>
                <DeckSquare kartenName="Spicey" kartenAnzahl={Fragen.Spicey.length}  onPress={() => navigation.navigate("FragenScreen", {chosenDeck: "Spicey",})}></DeckSquare>
                <DeckSquare kartenName="Gaming" kartenAnzahl={Fragen.Gaming.length}  onPress={() => navigation.navigate("FragenScreen", {chosenDeck: "Gaming",})}></DeckSquare>
                <DeckSquare kartenName="Alle" kartenAnzahl={Fragen.Alle.length}  onPress={() => navigation.navigate("FragenScreen", {chosenDeck: "Alle",})}></DeckSquare>
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