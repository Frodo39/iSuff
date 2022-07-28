import React, {useState, useEffect, useContex} from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import Fragen from "../data/Fragen.json";
import {PlayerListContext} from "./PlayerInputScreen";


const TestScreen = ({route, navigation}) => {
    const [ranNumb, setRanNumb] = useState(0); 
    const [rotation, setRotation] = useState (0);
    const [showShots, setShowShots] = useState(0);
    const [punkte, setPunkte] = useState([]);
    const {players} = route.params;
    const {chosenDeck} = route.params;
    const goal = 50;

    
    useEffect(() => {
        createPunkte(); 
    }, [],);

    const createPunkte= () => {
       setPunkte(players.map(() => 0)) // erstellt für jeden eingetragenen Namen eine 0 als ausgangspunkte in einem Array.
    }

    const nextPlayer = () => {
        if(rotation < players.length -1){
            setRotation(rotation +1);
        }else{
            setRotation(0);
        }
    }
    const richtigBeantwortet = () =>{
        setRanNumb( Math.floor(Math.random() * Fragen.Basic.length));
        setShowShots(Fragen.Basic[ranNumb].schluck);
        setPunkte(old => {
            const re = old.slice();
            re[rotation] = re[rotation] + Fragen.Basic[ranNumb].punkte; //nimmt das array, teilt es auf und dem entsprechendem index werden die punkte gutgeschrieben.
            return re; 
            })
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
                <Text style={styles.punkteTitle}>Ziel: {goal} Punkte</Text>
                <View style={styles.punkteBox}>
                    {players.map((players, i) => <View key={i} style={styles.playerNameWrapper}><Text style={styles.BoxNames}>{players.pName}: {punkte[i]}</Text></View>)}
                </View>
            </SafeAreaView>
            <View style={styles.fragenBox}>
                <Text style={styles.spieler}> {players[rotation].pName}</Text>
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
        flexBasis: '100%',
        flexDirection: "column",
        backgroundColor: '#050248',
        alignItems: 'center',
        justifyContent: 'center',
      },
    punkteContainer: {
        paddingTop: "2%",
        maxHeight: "25%",
        width: "85%",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: '1%',
    },
    punkteTitle:{
        color: "#fff",
    },
    punkteBox:{
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 1,
        borderStyle:"dashed",
        borderColor: "#E92EFB",
        backgroundColor: "#04005E",
        flexWrap: 'wrap',
        overflow: 'scroll', 
    },
    playerNameWrapper:{
        flexBasis: '30%',
        marginTop: 1,
        marginBottom: 1,


    },
    BoxNames:{
        color: "#ffffff",
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
        marginBottom: "3%",
      },
    spieler: {
        flex: 1,
        fontSize: 26,
        fontWeight: 'bold',
        color: "#ffffff",
        marginTop: "2%",
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

export default TestScreen;