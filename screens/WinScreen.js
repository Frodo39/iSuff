import React, {useState}from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Button from "../components/buttons/Button";
import SmallButton from "../components/buttons/SmallButton";


const WinScreen = ({route, navigation}) => {
    const {winner} = route.params;
    const [ranNumb1, setRanNumb1] = useState(0); 
    const [ranNumb2, setRanNumb2] = useState(0); 

    
    if(ranNumb1 == 0){
        setRanNumb1( Math.floor(Math.random() * 6 +1));
        setRanNumb2( Math.floor(Math.random() * 3 +1));
    }
  
    return(
        <View style={styles.container}> 
            <Text style={styles.title}> {(winner)} hat Gewonnen!!</Text>
            <Text style={styles.title2}>Entscheide: </Text>
            <View style={styles.optionsContainer}>
                <View style={styles.optionAContainer}>
                    <Text style={styles.optionText}>Alle Verlierer trinken {ranNumb1}</Text>
                    
                </View>
                <View style={styles.optionBContainer}>
                    <Text style={styles.optionText}>{winner} Darf Shots an  {ranNumb2 } Personen verteilen.</Text>
                </View>
            </View>
              <View style={styles.buttonContainer}>
                <Button text="Home" onPress={() => navigation.navigate("Start")}/>
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
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop:"10%",
        marginBottom: "20%",
        color: "#ffffff",
    },
    title2:{
        fontSize: 20,
        marginBottom: "10%",
        color: "#ffffff",
    },
    image:{
        height: 150, 
        width: 150,
        marginBottom: 60,
    },
    buttonContainer:{
    },
    optionsContainer:{
        flex: 1,
        flexDirection: "row",
        width: "85%",
        borderWidth: 2,
        borderRadius: 1,
        borderColor: "#E92EFB",
        marginBottom: "10%",
    },
    optionAContainer: {
        flexDirection: "column",
        width: "50%",
        alignItems: "center",
        justifyContent: "space-around",
        borderRightWidth: 4,
        borderColor: "#E92EFB",

        
    },
    optionText:{
        color: "#fff",
        fontSize: 28,
    },
    optionBContainer:{
        width: "50%",
        justifyContent:"center",
        alignItems: "center",
    },
 
  
})

export default WinScreen;