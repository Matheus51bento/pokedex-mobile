import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DetailsHeader } from "../../components/DetailsHeader";
import { Note } from "../../components/Note";
import { getPokemonById } from "../../service/ApiService";
import { Loading } from "../../components/Loadind";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");

type RootStackParamList = {
  Details: { item: any };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const route = useRoute<DetailsScreenRouteProp>();
  const { id }: any = route.params;

  useEffect(() => {
    setLoading(true);
    getData();
  }, [id]);

  async function getData() {
    try {
      const data = await getPokemonById(id);
      const annotationsData = await AsyncStorage.getItem(
        "@SPOKEDEX:ANNOTATIONS"
      );
      const annotationsJson: Annotation[] = annotationsData
        ? JSON.parse(annotationsData)
        : [];
      setPokemon(data);

      setAnnotations(annotationsJson.filter((item) => item.pokeId === data.id));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddAnnotation(annotation: Annotation) {
    setAnnotations((prev) => [annotation, ...prev]);
    const storageAnnotation = JSON.stringify([annotation, ...annotations]);
    await AsyncStorage.setItem("@SPOKEDEX:ANNOTATIONS", storageAnnotation);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={{ zIndex: 100, position: "relative" }}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <DetailsHeader
            pokemon={pokemon}
            addAnnotation={handleAddAnnotation}
            haveAnnotations={annotations.length > 0}
          />
        }
        data={annotations}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <Note annotation={item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={[styles.topShape, { borderColor: pokemon.color }]} />
      <View style={[styles.bottomShape, { borderColor: pokemon.color }]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#161A1C" },
  separator: {
    height: 16,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  topShape: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderRightWidth: width * 0.7,
    borderBottomWidth: height,
    borderBottomColor: "transparent",
  },
  bottomShape: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: width * 0.7,
    borderTopWidth: height,
    borderTopColor: "transparent",
    zIndex: 0,
  },
});
