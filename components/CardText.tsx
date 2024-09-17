import { Text, View, StyleSheet } from "react-native";

interface CardTextProps {
  title: string;
  content: number;
}

export default function CardText({ title, content }: CardTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}: </Text>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    fontSize: 10,
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
