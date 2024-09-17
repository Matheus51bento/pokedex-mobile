import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  Image,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getPokemonById } from "../../service/ApiService";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../components/Loadind";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [inputText, setInputText] = useState("");
  const [showSilhouette, setShowSilhouette] = useState(true);

  const router = useNavigation();
  const handleGoBack = () => router.goBack();

  const handleSubmit = () => {
    if (pokemon?.name.toLowerCase() === inputText.toLowerCase()) {
      Alert.alert(
        "Você acertou!",
        `Parabéns, você adivinhou o Pokémon corretamente!`
      );
    } else {
      Alert.alert("Você errou!", `O Pokémon correto era ${pokemon?.name}.`);
    }
    setInputText("");
    setShowSilhouette(false);
  };

  const SilhouetteImage = ({ imageUrl }: { imageUrl: string | null }) => {
    return (
      <View style={styles.container}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={[
              styles.image,
              showSilhouette ? { tintColor: "black" } : { tintColor: null },
            ]}
          />
        ) : null}
      </View>
    );
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  async function getData() {
    try {
      const randomNumber = Math.floor(Math.random() * 1010) + 1;

      const data = await getPokemonById(randomNumber);
      setPokemon(data);

      setLoading(false);
      setShowSilhouette(true);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SPokeDex</Text>
        <Text></Text>
      </View>
      <Text style={styles.game}>Quem é esse Pokemon?</Text>
      <View style={styles.pokemon}>
        <SilhouetteImage imageUrl={pokemon?.sprites?.front_default ?? null} />

        <TextInput
          style={styles.resposta}
          placeholder="Sua Resposta"
          placeholderTextColor="#fdf"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.buttons}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getData} style={styles.buttons}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#6195A9" },
  resposta: {
    backgroundColor: "#0090A9",
    color: "#fff",
    fontSize: 18,
    padding: 10,
    height: 48,
    width: "100%",
    borderRadius: 8,
    textAlign: "center",
    marginBottom: 10,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 16,
    marginTop: 10,
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
  game: {
    color: "#fff",
    fontFamily: "JokeyOne-Regular",
    fontSize: 32,
    textAlign: "center",
  },
  image: {
    width: 400,
    height: 400,
    tintColor: "black",
    resizeMode: "contain",
  },
  pokemon: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
  },

  buttons: {
    backgroundColor: "#fff",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#6195A9",
    textAlign: "center",
    fontSize: 18,
  },
});
