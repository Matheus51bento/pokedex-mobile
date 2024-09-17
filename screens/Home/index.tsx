import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import Card from "../../components/Card";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getListPokemon, getSearchByName } from "../../service/ApiService";

export default function Home() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<ShortPokemon[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation<any>();

  const handleCardPress = (id: number) => {
    navigation.navigate("Details", { id });
  };

  const handleButtonPress = () => {
    navigation.navigate("Play");
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      "JokeyOne-Regular": require("../../assets/fonts/JockeyOne-Regular.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
    getData();
  }, []);

  async function getData() {
    try {
      const res = await getListPokemon();
      setPokemons(res);
    } catch (error) {}
  }

  async function handleSubmit() {
    try {
      console.log(search);
      const { data } = await getSearchByName(search);
      console.log(data);
      setPokemons([data]);
    } catch (error) {
      if (error.response.status == 404) console.log("não encontrado");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SPokeDex</Text>
        <TouchableOpacity onPress={handleButtonPress} style={styles.play_button}>
            <Text style={{ color: "white", textAlign: "center" }}>Jogar</Text>
        </TouchableOpacity>
      <View style={styles.search_container}>
        <TextInput
          style={styles.search}
          placeholder="Pesquisar"
          onChangeText={(e) => setSearch(e)}
        />
        <TouchableOpacity style={styles.search_button} onPress={handleSubmit}>
          <MaterialIcons name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={pokemons}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item.id)}>
            <Card pokemon={item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E6C7",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  list: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: "100%",
  },
  title: {
    fontFamily: "JokeyOne-Regular",
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
  },
  search_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "90%",
  },
  play_button: {
    backgroundColor: "#E38800",
    padding: 10,
    borderRadius: 5,
    width: "90%",
  },
  search: {
    flex: 1,
    height: 42,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  search_button: {
    height: 40,
    width: 40,
    padding: 5,
    backgroundColor: "#E38800",
    color: "white",
    borderRadius: 5,
  },
});
