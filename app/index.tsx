import { StatusBar, StyleSheet, Text, View } from "react-native"
import NotesVisualizer from "@/components/NotesVisualizer"
import FloatingActionButton from "@/components/FloatingActionButton"
import { useState } from "react"
import { Note } from "@/models/note"

export default function Index() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet odio iaculis dui porta molestie. Aenean faucibus tempus augue et eleifend. Nunc scelerisque, urna quis blandit hendrerit.",
      createdAt: new Date(),
    },
  ])

  function handleNewNote(newNote: Note) {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }

  return (
    <>
      <StatusBar backgroundColor={"#1B1B1F"} />
      <View style={styles.appContainer}>
        <View style={styles.header}>
          <Text style={styles.headerH1}>personal notes</Text>
        </View>

        <View style={styles.notesVisualizer}>
          <NotesVisualizer notes={notes} />
        </View>

        <View style={styles.fab}>
          <FloatingActionButton onAddNote={handleNewNote} />
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
