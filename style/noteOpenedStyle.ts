import { StyleSheet } from "react-native"

const stylesOpenedStyle = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#1B1B1F",
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  noteDate: {
    color: "rgba(255, 255, 255, 0.70)",
    textTransform: "uppercase",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 16,
  },
  noteTitle: {
    color: "#FFF",
    fontSize: 36,
    fontFamily: "Roboto-Medium",
  },
  noteContent: {
    color: "#FFF",
    fontSize: 26,
    marginTop: 20,
    fontFamily: "Roboto-Regular",
  },
})

export default stylesOpenedStyle
