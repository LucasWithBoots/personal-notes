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
    fontWeight: "300",
    textTransform: "uppercase",
  },
  noteTitle: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 36,
  },
  noteContent: {
    color: "#FFF",
    fontSize: 26,
    marginTop: 20,
  },
})

export default stylesOpenedStyle
