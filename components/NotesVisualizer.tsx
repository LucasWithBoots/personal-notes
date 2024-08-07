import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
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

  const [modalOpened, setModalOpened] = useState<boolean>(false)
  const [selectedModal, setSelectedModal] = useState<Note | null>()

  function openModal(note: Note) {
    setSelectedModal(note)
    setModalOpened(true)
  }

  function closeModal() {
    setSelectedModal(null)
    setModalOpened(false)
  }

  return (
    <View style={styles.container}>
      {notes.map((itemData) => (
        <TouchableOpacity
          key={itemData.id}
          style={styles.noteVisualizer}
          onPress={() => openModal(itemData)}
        >
          <Text style={styles.h1}>{itemData.title}</Text>
          <Text style={styles.p}>{itemData.content}</Text>
        </TouchableOpacity>
      ))}
      <Modal
        visible={modalOpened}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.noteOpened}>
          <Text style={styles.noteOpenedData}>
            {selectedModal?.createdAt.toString()}
          </Text>
          <Text style={styles.noteOpenedTitle}>{selectedModal?.title}</Text>
          <Text style={styles.noteOpenedContent}>{selectedModal?.content}</Text>
        </View>
      </Modal>
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
  noteOpened: {
    backgroundColor: "#1B1B1F",
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  noteOpenedData: {
    color: "rgba(255, 255, 255, 0.70)",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  noteOpenedTitle: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 36,
  },
  noteOpenedContent: {
    color: "#FFF",
    fontSize: 26,
    marginTop: 20,
  },
})
