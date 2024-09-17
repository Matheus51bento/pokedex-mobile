import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  pokeId: number;
  addAnnotation: (e: Annotation) => void;
}

interface Errors {
  textError?: string;
  typeError?: string;
}

export function CreateNote({
  isVisible,
  closeModal,
  pokeId,

  addAnnotation,
}: Props) {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [errors, setErros] = useState<Errors | undefined>(undefined);

  async function handleSubmit() {
    if (text && type) {
      const dataAtual = new Date();
      const dia = String(dataAtual.getDate()).padStart(2, "0");
      const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
      const ano = dataAtual.getFullYear();

      const dataFormatada = `${dia}/${mes}/${ano}`;

      const idAleatorio = `${dataFormatada}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      const data = {
        id: idAleatorio,
        pokeId: pokeId,
        annotation: text,
        type: type,
        date: dataFormatada,
      };

      addAnnotation(data);
      closeModal();
    } else {
      let errors = {};
      if (!text) errors = { textError: "Anotação é obrigatório." };
      if (!type) errors = { ...errors, typeError: "Tipo é obrigatório." };
      setErros(errors);
    }
  }

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

            <TextInput
              placeholder="Anotação"
              style={[styles.input, errors?.textError ? styles.inputError : {}]}
              onChangeText={(e) => setText(e)}
            />
            {errors?.textError && (
              <Text style={styles.errorText}>{errors?.textError}</Text>
            )}
            <TextInput
              placeholder="Tag"
              style={[styles.input, errors?.typeError ? styles.inputError : {}]}
              onChangeText={(e) => setType(e)}
            />

            {errors?.typeError && (
              <Text style={styles.errorText}>{errors?.typeError}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    backgroundColor: "#DD2925",
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

  inputError: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    width: "100%",
  },
});
