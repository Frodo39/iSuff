import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function SmallButton({text }){
	return(
		<TouchableOpacity>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{ text }</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
		button:{
			borderRadius: 5,
			borderColor:"#E92EFB",
			borderWidth:2,
		},
		buttonText:{
			color:"#fff",
			fontWeight: "bold",
			textTransform:"uppercase",
			fontSize: 20,
			textAlign: "center",
		}
})