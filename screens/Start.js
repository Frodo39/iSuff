import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from "../components/buttons/Button";
import SmallButton from "../components/buttons/SmallButton";


const Start = ({navigation}) => {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>iSuff</Text>
            <Image style={styles.image} source={require(`../images/Glass.png`)}></Image>
              <View style={styles.buttonContainer}>
               {/* <Button text="Play" onPress={() => navigation.navigate("PlayerInput")}/> */}
                <Button text="Play" onPress={() => navigation.navigate("ChooseDeck")}/>

                <SmallButton text="How to play" onPress={() => navigation.navigate("HowToPlay")}/>
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
        fontSize: 90,
        fontWeight: "bold",
        marginBottom: "30%",
        color: "#ffffff",
      },
      image:{
        height: 150,
        width: 150,
        marginBottom: 60,
      },
      buttonContainer:{
      }
  
})

export default Start;