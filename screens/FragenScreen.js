import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import Fragen from "../data/Fragen.json";


const FragenScreen = () => {
    const [ranNumb, setRanNumb] = useState(1); 

    const  richtigBeantwortet = () =>{
       setRanNumb( Math.floor(Math.random() * Fragen.basic.length));
    }

    const  falschBeantwortet = () =>{
        setRanNumb( Math.floor(Math.random() * Fragen.basic.length));
     }

    return(
        <View style={styles.container}>
            <View style={styles.punkteBox}>
                <Text>Punkte anzeige</Text>
            </View>
            <View style={styles.fragenBox}>
                <Text style={styles.spieler}> {ranNumb}</Text>
                <Text style={styles.frage}>{Fragen.basic[ranNumb].frage}</Text>
                <View style={styles.shotBox}>
                    <Image  style={styles.image} source={require(`../images/Glass.png`)}></Image>
                    <Image  style={styles.image} source={require(`../images/Glass.png`)}></Image>
                </View>
                <Text style={styles.punkteAdd}>Punkte: + {Fragen.basic[ranNumb].punkte}</Text>
                <View style={styles.buttonBox}>
                    <View style={styles.buttonBoxMidBorder}>
                        <TouchableOpacity onPress={() => richtigBeantwortet()}>
                            <Image style={styles.xIcon} source={require(`../images/X.png`)}></Image>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>falschBeantwortet()}>
                            <Image style={styles.plusIcon} source={require(`../images/Check.png`)}></Image> 
                        </TouchableOpacity>
                    </View>
                </View>
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
    punkteBox: {
        flex: 1,
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