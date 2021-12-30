import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import Fragen from "../data/Fragen.json";


const FragenScreen = ({route, navigation}) => {
    const [ranNumb, setRanNumb] = useState(0); 
    const [rotation, setRotation] = useState (0);
    const [showShots, setShowShots] = useState(0);
    const playerArr = ["Kira", "Lukas", "Basti","Gina", "René", "Janni"]
    const playerScoreArr = [0, 1, 2, 3, 4, 5];
    const {chosenDeck} = route.params;
    const goal = 50;
    const [playerScore1, setPlayerScore1] = useState(0);
    const [playerScore2, setPlayerScore2] = useState(0);
    const [playerScore3, setPlayerScore3] = useState(0);
    const [playerScore4, setPlayerScore4] = useState(0);
    const [playerScore5, setPlayerScore5] = useState(0);
    const [playerScore6, setPlayerScore6] = useState(0);
        
    const gewonnen = (score) => {
        if(score >= goal){
            navigation.navigate("WinScreen", {winner: playerArr[rotation]});
        }
    }
    
    const nextPlayer = () => {
        if(rotation < playerArr.length -1){
            setRotation(rotation +1);
        }else if(rotation == playerArr.length -1){
            setRotation(0);
        }
    }
    const  richtigBeantwortet = () =>{
       setRanNumb( Math.floor(Math.random() * Fragen.Basic.length));
       setShowShots(Fragen.Basic[ranNumb].schluck);
        if(rotation == 0){
            setPlayerScore1(playerScore1 + Fragen.Basic[ranNumb].punkte)
            gewonnen(playerScore1);
        }else if(rotation == 1){
            setPlayerScore2(playerScore2 + Fragen.Basic[ranNumb].punkte)
            gewonnen(playerScore2);
        }else if(rotation == 2){
            setPlayerScore3(playerScore3 + Fragen.Basic[ranNumb].punkte)
            gewonnen(playerScore3);
        }else if(rotation == 3){
            setPlayerScore4(playerScore4 + Fragen.Basic[ranNumb].punkte)
            gewonnen(playerScore4);
        }else if(rotation == 4){
            setPlayerScore5(playerScore5 + Fragen.Basic[ranNumb].punkte)
            gewonnen(playerScore5);
        }else if(rotation == 5){
            setPlayerScore6(playerScore6 + Fragen.Basic[ranNumb].punkte)
            gewonnen(playerScore6);
        }  
        nextPlayer();
    }

    const  falschBeantwortet = () =>{
        setRanNumb( Math.floor(Math.random() * Fragen.Basic.length));
        setShowShots(Fragen.Basic[ranNumb].schluck)
        nextPlayer();
     }

    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.punkteContainer}>
                <Text style={styles.punkteTitle}>Deck: {(chosenDeck)}</Text>
                <Text style={styles.punkteTitle}>Ziel: {goal} Punkte</Text>
                <View style={styles.punkteBox}>
                    <View style={styles.column1}>
                        <Text style={styles.punkteText}>{playerArr[0]}: {playerScore1}</Text>
                        <Text style={styles.punkteText}>{playerArr[1]}: {playerScore2}</Text>
                        <Text style={styles.punkteText}>{playerArr[2]}: {playerScore3}</Text>
                    </View>
                    <View style={styles.column2}>
                        <Text style={styles.punkteText}>{playerArr[3]}: {playerScore4}</Text>
                        <Text style={styles.punkteText}>{playerArr[4]}: {playerScore5}</Text>
                        <Text style={styles.punkteText}>{playerArr[5]}: {playerScore6}</Text>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.fragenBox}>
                <Text style={styles.spieler}> {playerArr[rotation]}</Text>
                <Text style={styles.frage}>{Fragen.Basic[ranNumb].frage}</Text>
                <View style={styles.shotBox}>
                    {showShots >= 1 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 2 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 3 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 4 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 5 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots == 6 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                </View>
                <Text style={styles.punkteAdd}>Punkte: +{Fragen.Basic[ranNumb].punkte}</Text>
                <View style={styles.buttonBox}>
                    <View style={styles.buttonBoxMidBorder}>
                        <TouchableOpacity onPress={() => falschBeantwortet()}>
                            <Image style={styles.xIcon} source={require(`../images/X.png`)}></Image>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>richtigBeantwortet()}>
                            <Image style={styles.plusIcon} source={require(`../images/Check.png`)}></Image> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          
        </SafeAreaView>
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
    punkteContainer: {
        flex: 1,
        paddingTop: "10%",
        width: "85%",
        flexDirection: "column",
        alignItems: "center",
    },
    punkteTitle:{
        color: "#fff",
    },
    punkteBox:{
        justifyContent: "space-around",
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 1,
        borderStyle:"dashed",
        borderColor: "#E92EFB",
        backgroundColor: "#04005E",

    },
    punkteText:{
        color:"#fff",
        fontSize: 14,
    },
    fragenBox: {
        flex: 6,
        width: "85%",
        alignItems: "center",
        backgroundColor: "#04005E",
        borderColor: "#E92EFB",
        borderRadius: 5,
        borderWidth: 2,  
        marginBottom: "5%",
      },
    spieler: {
        flex:0.5,
        fontSize: 30,
        color: "#ffffff",
        marginTop: "4%",
      },
    frage:{
        flex: 6,
        fontSize: 26,
        color: "#ffffff",
        marginTop: "15%",
        paddingHorizontal: "4%",
      },
    shotBox: {
          flex: 1,
        flexDirection: "row",
      },
    image : {
        height: 50,
        width: 50,
    },
    punkteAdd: {
        flex: 0.4,
        fontSize: 16,
        color: "#ffffff",
      },
    buttonBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        borderTopColor:"#E92EFB",
        borderTopWidth: 1,
        alignItems: "center",

    },
    buttonBoxMidBorder:{
        borderRightColor:"#E92EFB",
        borderRightWidth: 1,
        paddingRight: "25%",
        justifyContent: "center",
    },
    xIcon:{
        height:50,
        width: 50,
        marginTop:"10%",
        
    },
    plusIcon: {
        height:60,
        width: 60,
    },
    title:{
        fontSize:10,
        color: "#fff",
    }

})

export default FragenScreen;