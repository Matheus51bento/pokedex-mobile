import { StyleSheet, Text, View } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <Text>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6E6C7",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
