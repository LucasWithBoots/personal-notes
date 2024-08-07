import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import CreateNoteModal from "@/components/CreateNoteModal"

export default function FloatingActionButton(props: any) {
  const [modalOpened, setModalOpened] = useState<boolean>(false)

  function openModal() {
    setModalOpened(true)
  }

  function closeModal() {
    setModalOpened(false)
  }

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <Image style={styles.imageIcon} source={require("../assets/add.png")} />
      </TouchableOpacity>
      <CreateNoteModal
        visible={modalOpened}
        onRequestClose={closeModal}
        onAddNote={props.onAddNote}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEAE1",
    width: 50,
    height: 50,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    width: "80%",
    height: "80%",
  },
})
