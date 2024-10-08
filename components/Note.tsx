import { View, Text, StyleSheet } from "react-native";

interface Props {
  annotation: Annotation;
}
export function Note({ annotation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={[
            styles.tag,
            { backgroundColor: OptionsType[annotation.type].color },
          ]}
        >
          <Text style={styles.tagText}>
            {OptionsType[annotation.type].name}
          </Text>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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

const OptionsType = {
  importante: {
    name: "Importante",
    color: "#F00",
  },
  media: {
    name: "Média",
    color: "FFB800",
  },
  baixa: {
    name: "Baixa",
    color: "#32BF00",
  },
};
