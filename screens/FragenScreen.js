import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import Fragen from "../data/Fragen.json";


const FragenScreen = () => {
    const [ranNumb, setRanNumb] = useState(0); 
    const [rotation, setRotation] = useState (0);
    const [showShots, setShowShots] = useState(0);
    const playerArr = ["Kira", "Lukas", "Basti","Gina", "René", "Janni"]


    const  richtigBeantwortet = () =>{
       setRanNumb( Math.floor(Math.random() * Fragen.Basic.length));
       setShowShots(Fragen.Basic[ranNumb].schluck)
       if(rotation < playerArr.length -1){
            setRotation(rotation +1);
       }else if(rotation == playerArr.length -1){
            setRotation(0);
       }
    }

    const  falschBeantwortet = () =>{
        setRanNumb( Math.floor(Math.random() * Fragen.Basic.length));
        setShowShots(Fragen.Basic[ranNumb].schluck)
        if(rotation < playerArr.length -1){
            setRotation(rotation +1);
        }else if(rotation == playerArr.length -1 ){
            setRotation(0);
        }
     }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.punkteBox}>
                <Text>Punkte anzeige</Text>
                <Text style={styles.punkte}>{playerArr[0]}</Text>
                <Text style={styles.punkte}>{playerArr[1]}</Text>
                <Text style={styles.punkte}>{playerArr[2]}</Text>
                <Text style={styles.punkte}>{playerArr[3]}</Text>
                <Text style={styles.punkte}>{playerArr[4]}</Text>
                <Text style={styles.punkte}>{playerArr[5]}</Text>
            </View>
            <View style={styles.fragenBox}>
                <Text style={styles.spieler}> {playerArr[rotation]}</Text>
                <Text style={styles.frage}>{Fragen.Basic[ranNumb].frage}</Text>
                <View style={styles.shotBox}>
                    {showShots >= 1 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 2 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 3 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots >= 4 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                    {showShots == 5 ? <Image  style={styles.image} source={require(`../images/Glass.png`)} /> : null}
                </View>
                <Text style={styles.punkteAdd}>Punkte: + {Fragen.Basic[ranNumb].punkte}</Text>
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
    punkteBox: {
        flex: 1,
    },
    punkte:{
        color:"#fff",
    },
    fragenBox: {
        flex: 5,
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
        fontSize: 20,
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
    },
    buttonBoxMidBorder:{
        borderRightColor:"#E92EFB",
        borderRightWidth: 1,
        paddingRight: "25%",
    },
    xIcon:{
        height:45,
        width: 45,
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