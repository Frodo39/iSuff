import React , {useState} from "react";
import {View,ScrollView, Text, TextInput, StyleSheet} from "react-native";
import { clearWarnings } from "react-native/Libraries/LogBox/Data/LogBoxData";

import Button from "../components/buttons/Button";
import SmallButton from "../components/buttons/SmallButton";



const PlayerInput = ({navigation}) => {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);

    //placeholder="0" placeholderTextColor={"#ffffff"} keyboardType="numeric" maxLength={1} clearTextOnFocus
    //momentan nicht verwendet
    //
    
    const nameInputHandler = (enteredName) => {
        setName(enteredName);
    };
    
    const addNameHandler = () => {
        setNameList(currentNames => [...currentNames,{pName: name}]);
    };

    return(
        
        <View style={styles.container}>
            <View style={styles.namenScreen}>
                <View style={styles.textContainer}> 
                    <Text style={styles.title}>Spieler hinzufügen</Text>
                </View>
                <ScrollView style={styles.nameListContainer} contentContainerStyle={styles.scrollViewNameList} >
                    {nameList.map((player, i) => <View key={i}><Text style={styles.names}>{player.pName}</Text></View>)}
                </ScrollView>
                <View  style={styles.buttonContainer}>
                    <View>
                        <TextInput style={styles.input} onChangeText={nameInputHandler} value={name} placeholder="Name" placeholderTextColor={"#ffffff"} words clearTextOnFocus />
                        <SmallButton text="Add player" onPress={addNameHandler}/>
                    </View>
                    {/*<Button text="zum Deck" onPress={(e) => navigation.navigate("FragenScreen", {players: nameList})}/>*/}
                    <Button text="zum Deck" onPress={(e) => navigation.navigate("TestScreen", {players: nameList})}/>  
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: '#050248',
        alignItems: 'center',
        justifyContent: 'center',
    },
    namenScreen:{
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    textContainer:{
        height: "10%",
        paddingTop:"5%",
        marginBottom: "5%",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#ffffff",
    },
    nameListContainer:{
        minHeight: "20%",
        maxHeight: "60%",
        width: "85%",
        borderColor: "#E92EFB",
        borderWidth: 1,
    },
    scrollViewNameList:{
        minHeight: "20%",
        flexGrow: 1,
        width: "100%",
        color: "#ffffff",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center"
    },
    names:{
        color:"#ffffff",
        width: "100%",
        fontSize: 20,
    },
    buttonContainer:{
        flexDirection:"column",
        height: "50%",
        justifyContent: "center",
        alignItems:"center" ,
    },

    input: {
        height: 40,
        maxWidth: "30%",
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        color: "#ffffff",
        borderColor: "#E92EFB",
    },
})

export default PlayerInput;