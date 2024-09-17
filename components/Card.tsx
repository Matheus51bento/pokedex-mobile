import { StyleSheet, Text, View, Image } from "react-native";
import CardText from "../components/CardText";
import TypeCard from "../components/TypeCard";
import { PokemonTypes } from "../utils/PokemonTypes";

const Pokebola = require("../assets/pokebola.png");

interface Props {
  pokemon: ShortPokemon;
}

export default function Card({ pokemon }: Props) {
  const filteredStats = pokemon.stats.filter((item) =>
    ["attack", "hp", "defense", "speed"].includes(item.stat.name)
  );

  return (
    <View style={styles.card}>
      <Image
        style={{
          width: 172,
          height: 142,
          resizeMode: "contain",
          marginVertical: "auto",
          marginLeft: 8,
        }}
        source={{ uri: pokemon.sprites.other.showdown.front_default }}
      />

      <View style={styles.card_column}>
        <Text style={styles.card_title}>{pokemon.name}</Text>
        {filteredStats.map((item) => (
          <CardText title={item.stat.name} content={item.base_stat} />
        ))}
        <View style={styles.row}>
          {pokemon.types.map((type) => (
            <TypeCard
              color={PokemonTypes[type.type.name]}
              content={type.type.name}
            />
          ))}
        </View>
      </View>

      <View style={styles.pokenumber}>
        <Text style={styles.pokeId}>N° {pokemon.id}</Text>
      </View>

      <Image style={styles.backgroundImage} source={Pokebola} />
    </View>
  );
}

const styles = StyleSheet.create({
  pokeId: {
    textAlign: "center",
    color: "#bab",
    fontWeight: "bold",
    position: "absolute",
    top: 16,
    right: 16,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    gap: 5,
    backgroundColor: "white",
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 10,
    height: 180,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    opacity: 1,
  },
  row: { flexDirection: "row", gap: 8, width: "100%" },
  card_column: {
    zIndex: 100,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pokenumber: {
    display: "flex",
    justifyContent: "flex-start",
  },
});
