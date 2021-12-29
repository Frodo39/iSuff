import React , {useState} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

import Button from "../components/buttons/Button";

const PlayerInput = ({navigation}) => {
    const [playername, setPlayerName] = useState();

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Spieler hinzufügen</Text>
            </View>
            <View  style={styles.deckcontainer}>
                <TextInput style={styles.input} onChangeText= {setPlayerName} value={playername} placeholder="add Spieler " words clearTextOnFocus/>

                <Button text="zum Deck" onPress={() => navigation.navigate("ChooseDeck")}/>
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
    textContainer:{
        flex:1,
        paddingTop:"15%",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#ffffff",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#ffffff",
        borderColor: "#E92EFB",
        

    }
})

export default PlayerInput;