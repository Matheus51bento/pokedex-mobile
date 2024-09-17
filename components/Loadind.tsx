import { Image, StyleSheet, Text, View } from "react-native";

const LoadingGif = require("../assets/simple_pokeball.gif");

export function Loading() {
  return (
    <View style={styles.container}>
      <Image source={LoadingGif} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161A1C",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 350,
    resizeMode: "contain",
  },
});
