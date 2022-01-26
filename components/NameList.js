import React from "react";
import {View, Text, StyleSheet} from "react-native";


// check ob benötigt sonst löschen
const NameList = ({playername, punkte}) => {

    return(
        <View style={styles.nameListWraper}>
            <Text style={styles.playername}>{playername}: {punkte}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    nameListWraper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2
    },
    playername:{
        fontSize: 14,
        color:  "#fff",
    },
    punkte: {
        fontSize: 14,
        color:  "#fff",
    }

})

export default NameList;