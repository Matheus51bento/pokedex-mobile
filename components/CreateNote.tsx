import { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

interface Props {
  isVisible: boolean;
  closeModal: () => void;
}

export function CreateNote({ isVisible, closeModal }: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <TouchableOpacity style={styles.centeredView} onPress={closeModal}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Criar Anotação</Text>

            <TextInput placeholder="Anotação" style={styles.input} />
            <TextInput placeholder="Tag" style={styles.input} />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    gap: 16,
    paddingHorizontal: 32,
    paddingVertical: 40,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 40,
    justifyContent: "center",
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#E38800",
  },

  input: {
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: "#C2C2C2",
  },

  buttonText: {
    fontFamily: "Inter",
    fontWeight: "600",
    color: "#fff",
    fontSize: 16,
  },

  modalText: {
    fontFamily: "JokeyOne-Regular",
    fontSize: 24,
  },
});
