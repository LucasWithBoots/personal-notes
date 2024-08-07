import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import stylesOpenedStyle from "@/style/noteOpenedStyle"
import { useState } from "react"
import { Styles } from "@expo/config-plugins/build/android"
import { Note } from "@/models/note"

export default function CreateNoteModal(props: any) {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  function addTitleHandler(title: string) {
    setTitle(title)
  }

  function addDescriptionHandler(description: string) {
    setDescription(description)
  }

  function addNote() {
    const newNote: Note = {
      id: Math.random(),
      title: title,
      content: description,
      createdAt: new Date(),
    }

    props.onAddNote(newNote)
    setTitle("")
    setDescription("")
    props.onRequestClose()
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.onRequestClose}
    >
      <View style={stylesOpenedStyle.noteContainer}>
        <TouchableOpacity
          onPress={props.onRequestClose}
          style={styles.buttonTop}
        >
          <Image
            style={styles.imageIconBackArrow}
            source={require("../assets/arrow_back.png")}
          />
        </TouchableOpacity>

        <TextInput
          style={stylesOpenedStyle.noteTitle}
          placeholder={"Title"}
          placeholderTextColor={"rgba(255, 255, 255, 0.30)"}
          onChangeText={addTitleHandler}
          value={title}
        ></TextInput>

        <TextInput
          style={stylesOpenedStyle.noteContent}
          placeholder={"Content"}
          placeholderTextColor={"rgba(255, 255, 255, 0.20)"}
          onChangeText={addDescriptionHandler}
          value={description}
        ></TextInput>

        <TouchableOpacity style={styles.container} onPress={addNote}>
          <Image
            style={styles.imageIcon}
            source={require("../assets/check.png")}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  buttonTop: {
    marginBottom: 30,
  },
  container: {
    backgroundColor: "#FFEAE1",
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    right: 16,
    bottom: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    width: "80%",
    height: "80%",
  },
  imageIconBackArrow: {
    width: 35,
    height: 35,
  },
})
