import { FlatList, StyleSheet, Text, View } from "react-native"
import { useState } from "react"
import { Note } from "@/models/note"

export default function NotesVisualizer() {
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

  return (
    <View style={styles.container}>
      {notes.map((itemData) => (
        <View key={itemData.id} style={styles.noteVisualizer}>
          <Text style={styles.h1}>{itemData.title}</Text>
          <Text style={styles.p}>{itemData.content}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 7,
  },
  noteVisualizer: {
    borderWidth: 1,
    borderColor: "#FFEAE1",
    borderRadius: 15,
    paddingHorizontal: 17,
    paddingVertical: 21,
    width: "49%",
  },
  h1: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
  p: {
    color: "rgba(255, 255, 255, 0.52)",
    fontWeight: "400",
  },
})
