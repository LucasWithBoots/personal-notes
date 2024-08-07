import {
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
        <TextInput style={stylesOpenedStyle.noteDate}></TextInput>

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

        <TouchableOpacity
          style={styles.container}
          onPress={addNote}
        ></TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEAE1",
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    right: 16,
    bottom: 16,
  },
})
