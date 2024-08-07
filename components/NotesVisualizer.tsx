import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { Note } from "@/models/note"
import VisualizeNoteModal from "@/components/VisualizeNoteModal"

export default function NotesVisualizer(props: any) {
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
      {props.notes.map((itemData: Note) => (
        <TouchableOpacity
          key={itemData.id}
          style={styles.noteVisualizer}
          onPress={() => openModal(itemData)}
        >
          <Text style={styles.h1}>{itemData.title}</Text>
          <Text style={styles.p}>{itemData.content}</Text>
        </TouchableOpacity>
      ))}
      <VisualizeNoteModal
        visible={modalOpened}
        onRequestClose={closeModal}
        selectedModal={selectedModal}
      />
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
