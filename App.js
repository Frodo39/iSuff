import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iSuff</Text>
      <Image style={styles.image} source={require(`../iSuff/images/Glass.png`)}></Image>
      <View style={styles.playContainer}>
        <Text style={styles.play}> Play</Text>
      </View>
      <View style={styles.howtoplayContainer}>
        <Text style={styles.howtoplay}>How To Play</Text>
      </View>
      </View>
  );
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
  playContainer: {
    width: 160,
    height: 60,
    borderColor: "#E92EFB",
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: "10%",
  },
  play:{
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "bold",
  },
  howtoplayContainer:{
    width: 140,
    height: 40,
    borderColor: "#E92EFB",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  howtoplay:{
    fontSize: 18,
    color: "#ffffff",
  }
});
