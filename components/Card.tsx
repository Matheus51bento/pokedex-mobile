import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import CardText from "../components/CardText";
import TypeCard from "../components/TypeCard";

const Pokebola = require("../assets/pokebola.png");

interface Card {
  name: string;
  image: ImageSourcePropType;
  hp: string;
  attack: string;
  defense: string;
  speed: string;
  type: string;
}

interface Props {
  card: Card;
}

export default function Card({ card }: Props) {
  return (
    <View style={styles.card}>
      <View style={{ marginVertical: "auto" }}>
        <Image
          style={{ width: 160, height: 160, borderRadius: 50 }}
          source={card.image}
        />
      </View>
      <View style={styles.card_column}>
        <Text style={styles.card_title}>{card.name}</Text>
        <CardText title="HP" content={card.hp} />
        <CardText title="ATTACK" content={card.attack} />
        <CardText title="DEFENSE" content={card.defense} />
        <CardText title="SPEED" content={card.speed} />
        <TypeCard color="#f40" content={card.type} />
      </View>
      <View style={styles.card_column}>
        <View style={styles.pokenumber}>
          <Text
            style={{ textAlign: "center", color: "#bab", fontWeight: "bold" }}
          >
            N° 001
          </Text>
        </View>
      </View>
      <Image style={styles.backgroundImage} source={Pokebola} />
    </View>
  );
}

const styles = StyleSheet.create({
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
  card_column: {
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
