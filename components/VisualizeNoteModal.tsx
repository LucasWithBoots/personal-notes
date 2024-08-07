import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import stylesOpenedStyle from "@/style/noteOpenedStyle"

export default function VisualizeNoteModal(props: any) {
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

const styles = StyleSheet.create({
  buttonTop: {
    marginBottom: 30,
  },
  imageIconBackArrow: {
    width: 35,
    height: 35,
  },
})
