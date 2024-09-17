import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CreateNote } from "./CreateNote";
import { useEffect, useState } from "react";
import { PokemonTypes } from "../utils/PokemonTypes";

interface Props {
  pokemon: Pokemon;
  haveAnnotations: boolean;
  addAnnotation: (e: Annotation) => void;
}

export function DetailsHeader({
  pokemon,
  addAnnotation,
  haveAnnotations,
}: Props) {
  const router = useNavigation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [backImg, setBackImg] = useState(false);
  const filteredStats = pokemon.stats.filter((item) =>
    ["speed", "defense", "attack"].includes(item.stat.name)
  );

  const handleGoBack = () => router.goBack();
  const handleCloseModal = () => setModalIsOpen(false);
  const handleOpenModal = () => setModalIsOpen(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setBackImg((prev) => !prev);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <CreateNote
        addAnnotation={addAnnotation}
        pokeId={pokemon.id}
        isVisible={modalIsOpen}
        closeModal={handleCloseModal}
      />
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
        <Text style={styles.mainPokemonId}>Nº {pokemon.id}</Text>

        <Image
          source={{
            uri: backImg
              ? pokemon.sprites.other.showdown.back_default
              : pokemon.sprites.other.showdown.front_default,
          }}
          style={styles.mainPokemonImg}
        />

        <View style={styles.mainPokemonTextContainer}>
          <Text style={styles.mainPokemonName}>{pokemon.name}</Text>
          <Text style={styles.status}>
            HP:{" "}
            <Text style={styles.statusCount}>
              {pokemon.stats.find((item) => item.stat.name === "hp")?.base_stat}
            </Text>
          </Text>
        </View>

        <View style={styles.mainPokemonTags}>
          {pokemon.types.map((stat) => (
            <View
              style={[
                styles.mainPokemonTag,
                { backgroundColor: PokemonTypes[stat.type.name] },
              ]}
            >
              <Text style={styles.mainPokemonTagText}>{stat.type.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.statusRow}>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>
            height:{" "}
            <Text style={styles.statusCount}>{pokemon.height / 10} m</Text>
          </Text>
          <Text style={styles.status}>
            weight:{" "}
            <Text style={styles.statusCount}>{pokemon.weight / 10} kg</Text>
          </Text>
          <Text style={styles.status}>
            abilities:{" "}
            <Text style={styles.statusCount}>
              {pokemon.abilities[0].ability.name}
            </Text>
          </Text>
        </View>
        <View style={styles.statusContainer}>
          {filteredStats.map((item) => (
            <Text style={styles.status}>
              {item.stat.name}:{" "}
              <Text style={styles.statusCount}>{item.base_stat}</Text>
            </Text>
          ))}
        </View>
      </View>
      {haveAnnotations && <Text style={styles.notesTitle}>Anotações:</Text>}
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
    marginTop: 16,
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
    gap: 12,
    flexWrap: "wrap",
  },
  mainPokemonTag: {
    backgroundColor: "#646464",
    padding: 4,
    borderRadius: 3,
  },
  mainPokemonTagText: {
    color: "#FDFDFD",
    fontSize: 16,
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
    lineHeight: 18,
    color: "#505050",
  },

  statusCount: {
    fontFamily: "Inter",
    fontSize: 16,
  },

  notesTitle: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "JokeyOne-Regular",
    marginBottom: 10,
  },
});
