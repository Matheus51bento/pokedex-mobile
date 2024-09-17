import { View, Text, StyleSheet } from "react-native";

interface Props {
  annotation: Annotation;
}
export function Note({ annotation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{annotation.type}</Text>
        </View>
        <Text style={styles.date}>{annotation.date}</Text>
      </View>
      <Text>{annotation.annotation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  date: {
    color: "#969696",
    fontSize: 13,
    fontFamily: "Inter",
  },

  tag: {
    backgroundColor: "#f00",
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },

  tagText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Inter",
  },
});
