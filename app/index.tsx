import { StatusBar, StyleSheet, Text, View } from "react-native"
import Filters from "@/app/Filters"
import NotesVisualizer from "@/app/NotesVisualizer"
import FloatingActionButton from "@/app/FloatingActionButton"

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor={"#1B1B1F"} />
      <View style={styles.appContainer}>
        <View style={styles.header}>
          <Text style={styles.headerH1}>personal notes</Text>
        </View>

        <Filters />
        <View style={styles.notesVisualizer}>
          <NotesVisualizer />
        </View>

        <View style={styles.fab}>
          <FloatingActionButton />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1B1B1F",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
  },
  headerH1: {
    color: "#FFFFFF",
    fontSize: 36.35,
    fontWeight: "bold",
    marginBottom: 40,
  },
  notesVisualizer: {
    marginTop: 20,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
})
