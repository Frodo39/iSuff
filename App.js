import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from "./components/Start";

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
     <Start></Start>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#050248',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
