import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function SmallButton({text, onPress }){
	return(
		<TouchableOpacity>
			<View style={styles.button} onStartShouldSetResponder={onPress}>
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
			marginBottom: "4%",
		},
		buttonText:{
			color:"#fff",
			fontWeight: "bold",
			textTransform:"uppercase",
			fontSize: 15,
			textAlign: "center",
			paddingHorizontal: "6%",
			paddingVertical:"4%",
		}
})