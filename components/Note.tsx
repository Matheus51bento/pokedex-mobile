import { View, Text, StyleSheet } from "react-native";

export function Note() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Important</Text>
        </View>
        <Text style={styles.date}>12/09/2024</Text>
      </View>
      <Text>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type
      </Text>
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
