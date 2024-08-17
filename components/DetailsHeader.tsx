import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CreateNote } from "./CreateNote";
import { useState } from "react";

const Snorlax = require("../assets/snorlax.png");

export function DetailsHeader() {
  const router = useNavigation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleGoBack = () => router.goBack();
  const handleCloseModal = () => setModalIsOpen(false);
  const handleOpenModal = () => setModalIsOpen(true);

  return (
    <>
      {/* Header */}
      <CreateNote isVisible={modalIsOpen} closeModal={handleCloseModal} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>SPokeDex</Text>

        <TouchableOpacity style={styles.headerButton} onPress={handleOpenModal}>
          <MaterialCommunityIcons
            name="note-edit-outline"
            size={28}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mainPokemon}>
        <Text style={styles.mainPokemonId}>Nº 001</Text>
        <Image source={Snorlax} style={styles.mainPokemonImg} />
        <View style={styles.mainPokemonTextContainer}>
          <Text style={styles.mainPokemonName}>Snorlax</Text>
          <Text style={styles.status}>
            HP: <Text style={styles.statusCount}>167</Text>
          </Text>
        </View>

        <View style={styles.mainPokemonTags}>
          <View style={styles.mainPokemonTag}>
            <Text style={styles.mainPokemonTagText}>Normal</Text>
          </View>
        </View>
      </View>

      <View style={styles.statusRow}>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>
            height: <Text style={styles.statusCount}>0.7m</Text>
          </Text>
          <Text style={styles.status}>
            weight: <Text style={styles.statusCount}>6.9kg</Text>
          </Text>
          <Text style={styles.status}>
            abilities: <Text style={styles.statusCount}>Overgrow</Text>
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>
            Attack: <Text style={styles.statusCount}>52</Text>
          </Text>
          <Text style={styles.status}>
            Defense: <Text style={styles.statusCount}>43</Text>
          </Text>
          <Text style={styles.status}>
            speed: <Text style={styles.statusCount}>65</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.notesTitle}>Anotações:</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: "JokeyOne-Regular",
    fontSize: 48,
    lineHeight: 50,
    fontWeight: "bold",
    color: "#fff",
  },
  headerButton: {
    marginTop: -10,
  },
  mainPokemon: {
    flex: 1,
    height: 350,
    padding: 16,
    backgroundColor: "#fff",
    gap: 4,
    borderRadius: 8,
    marginBottom: 16,
  },

  mainPokemonId: {
    color: "#A7A7A7",
    fontFamily: "Inter",
    fontWeight: "700",
    position: "absolute",
    fontSize: 14,
    top: 16,
    left: 16,
  },

  mainPokemonImg: {
    objectFit: "contain",
    width: "100%",
    flex: 1,
  },

  mainPokemonTextContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  mainPokemonName: {
    color: "#1A1A1A",
    fontSize: 30,
    lineHeight: 30,
    fontFamily: "JokeyOne-Regular",
  },

  mainPokemonTags: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  mainPokemonTag: {
    backgroundColor: "#646464",
    padding: 4,
    borderRadius: 3,
  },
  mainPokemonTagText: {
    color: "#FDFDFD",
    fontSize: 12,
    fontFamily: "Inter",
  },

  statusRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },

  statusContainer: {
    backgroundColor: "#fff",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    flex: 1,
  },

  status: {
    textTransform: "uppercase",
    fontFamily: "JokeyOne-Regular",
    fontSize: 16,
    lineHeight: 16,
    color: "#505050",
  },

  statusCount: {
    fontFamily: "Inter",
    fontSize: 14,
  },

  notesTitle: {
    color: "#000",
    fontSize: 24,
    fontFamily: "JokeyOne-Regular",
    marginBottom: 10,
  },
});
