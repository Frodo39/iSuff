import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from "./screens/Start";
import HowToPLayScreen from './screens/HowToPLayScreen';
import ChooseDeckScreen from "./screens/ChooseDeck";
import FragenScreen from './screens/FragenScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChooseDeck" component={ChooseDeckScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HowToPlay" component={HowToPLayScreen} options={{headerShown: false}}/>
        <Stack.Screen name="FragenScreen" component={FragenScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({

});
