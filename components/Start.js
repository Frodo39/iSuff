import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from "./buttons/Button";
import SmallButton from "./buttons/SmallButton";


const Start = () => {
    return(
        <View> 
            <Text style={styles.title}>iSuff</Text>
            <Image style={styles.image} source={require(`../images/Glass.png`)}></Image>
              <Button text="Play"/>
              <SmallButton text="How to play"/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontWeight: "bold",
        marginBottom: "30%",
        color: "#ffffff",
      },
      image:{
        height: 150,
        width: 150,
        marginBottom: 60,
      },
})

export default Start;