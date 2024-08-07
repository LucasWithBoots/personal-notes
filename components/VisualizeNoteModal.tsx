import { Modal, StyleSheet, Text, View } from "react-native"
import stylesOpenedStyle from "@/style/noteOpenedStyle"

export default function VisualizeNoteModal(props: any) {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.onRequestClose}
    >
      <View style={stylesOpenedStyle.noteContainer}>
        <Text style={stylesOpenedStyle.noteDate}>
          {props.selectedModal?.createdAt.toString()}
        </Text>
        <Text style={stylesOpenedStyle.noteTitle}>
          {props.selectedModal?.title}
        </Text>
        <Text style={stylesOpenedStyle.noteContent}>
          {props.selectedModal?.content}
        </Text>
      </View>
    </Modal>
  )
}
