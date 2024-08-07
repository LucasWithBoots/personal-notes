import { Modal, StyleSheet, Text, View } from "react-native"

// TODO: Mudar o tipo de any para um menos genérico
export default function VisualizeNoteModal(props: any) {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.onRequestClose}
    >
      <View style={styles.noteOpened}>
        <Text style={styles.noteOpenedData}>
          {props.selectedModal?.createdAt.toString()}
        </Text>
        <Text style={styles.noteOpenedTitle}>{props.selectedModal?.title}</Text>
        <Text style={styles.noteOpenedContent}>
          {props.selectedModal?.content}
        </Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
