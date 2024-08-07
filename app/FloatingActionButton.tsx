import {StyleSheet, View} from "react-native";

export default function FloatingActionButton(){
    return(
        <View style={styles.container}>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: "#FFEAE1",
        width: 50,
        height: 50,
        borderRadius: 100
    }
})