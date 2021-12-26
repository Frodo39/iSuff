import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Button from "../components/buttons/Button";

import DeckSquare from "../components/DeckSquare";

const ChooseDeck = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                 <Text style={styles.title}>Deck wählen</Text>
            </View>
            <View  style={styles.deckcontainer}>
                <DeckSquare kartenName="Basic" kartenAnzahl="20"></DeckSquare>
                <DeckSquare kartenName="Extreme" kartenAnzahl="20"></DeckSquare>
                <DeckSquare kartenName="SFW" kartenAnzahl="20"></DeckSquare>
                <DeckSquare kartenName="Alle" kartenAnzahl="60"></DeckSquare>
            </View>
            <Button text="Fragen" onPress={() => navigation.navigate("FragenScreen")}/>

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