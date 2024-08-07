import { StatusBar, StyleSheet, Text, View } from "react-native"
import Filters from "@/components/Filters"
import NotesVisualizer from "@/components/NotesVisualizer"
import FloatingActionButton from "@/components/FloatingActionButton"
import { useState } from "react"
import { Note } from "@/models/note"

export default function Index() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
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

        <Filters />
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
