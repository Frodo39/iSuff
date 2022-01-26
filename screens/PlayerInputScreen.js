import React , {useState} from "react";
import {View,ScrollView, Text, TextInput, StyleSheet} from "react-native";
import { clearWarnings } from "react-native/Libraries/LogBox/Data/LogBoxData";

import Button from "../components/buttons/Button";
import SmallButton from "../components/buttons/SmallButton";



const PlayerInput = ({navigation}) => {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);
    const [number, setNumber] = useState(null);
    const [numberEntered, setnumberEntered] = useState(false);

    
    
    //placeholder="0" placeholderTextColor={"#ffffff"} keyboardType="numeric" maxLength={1} clearTextOnFocus
    //momentan nicht verwendet
    //
    
    const numberEnteredHandler = (number) =>{
        setnumberEntered(true);
    };
    const nameInputHandler = (enteredName) => {
        setName(enteredName);
    };
    
    const addNameHandler = () => {
        setNameList(currendNames => [...currendNames,name]);
        console.log(nameList);
    };

    return(
        
        <View style={styles.container}>
            {!numberEntered ? 
            <View  style={styles.spieleranzahlScreenContainer}>   
                <Text style={styles.title}>Wie viele Spieler?</Text>
                <View style={styles.numbInputContainer}>
                    <TextInput style={styles.numbInput}  value={number} onChangeText={(val) => setNumber(val)}/>
                    <SmallButton text="weiter" onPress={numberEnteredHandler}/>
                    <Text> {number}</Text>
                </View>
             </View> : null}
            

            {numberEntered ? 
            <View style={styles.namenScreen}>
                <View style={styles.textContainer}> 
                    <Text style={styles.title}>{number}Spieler hinzufügen</Text>
                </View>
                <View style={styles.nameListContainer}>
                    {nameList.map((playername, i) => <View key={i}><Text >{playername}</Text></View>)}
                </View>
                <View  style={styles.buttonContainer}>
                <ScrollView>
                        <TextInput style={styles.input} onChangeText={nameInputHandler} value={name} placeholder="Name " placeholderTextColor={"#ffffff"} words clearTextOnFocus />
                        <SmallButton text="Add player" onPress={addNameHandler}/>
                    </ScrollView>
                    <Button text="zum Deck" onPress={(e) => navigation.navigate("FragenScreen", {players: nameList})}/>
                </View>
            </View> : null}

            
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
    spieleranzahlScreenContainer:{
        flex:1,
        flexDirection:"column",
        marginTop:"20%",
        width: "80%",
        borderWidth: 1,
        color: "#ffffff",
        borderColor: "#E92EFB",
        
    },
    namenScreen:{
        flex: 1,
        flexDirection: "column",


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
    nameListContainer:{
        flex: 2,
        width: "85%",
        borderWidth: 1,
        padding: 10,
        color: "#ffffff",
        borderColor: "#E92EFB",
    },
    buttonContainer:{
        flex:1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#ffffff",
        borderColor: "#E92EFB",
    },
    numbInputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    numbInput:{
        height: 60,
        width: 60,
        fontSize:40,
        borderWidth: 1,
        borderColor: "#E92EFB",
        marginHorizontal: "50%",
        textAlign:"center",
        color: "#ffffff",
        marginBottom: "10%",
    }
})

export default PlayerInput;