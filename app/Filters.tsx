import {FlatList, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function Filters(){
    const [filters, setFilters]=useState<string[]>([
        "to-do", "word", "important"
    ])

    return (
        <View style={styles.container}>
            {filters.map((item,index)=>(
                <View key={index} style={styles.containerFilter}>
                    <Text style={styles.textContainer}>{item}</Text>
                </View>
            ))}
        </View>


    )
}

const styles= StyleSheet.create({
    container:{
      display: "flex",
      flexDirection: "row",
        gap: 7
    },
    containerFilter:{
        backgroundColor: "#FFEAE1",
        display: "flex",
        alignSelf: "flex-start",
        paddingHorizontal: 19,
        paddingVertical: 9,
        borderRadius: 13
    },
    textContainer:{
        color: "rgba(0, 0, 0, 0.70);",
        fontSize: 20,
        fontWeight: "light"
    }
})