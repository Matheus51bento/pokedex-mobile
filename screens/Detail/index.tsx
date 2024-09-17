import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DetailsHeader } from "../../components/DetailsHeader";
import { Note } from "../../components/Note";
import { getPokemonById } from "../../service/ApiService";
import { Loading } from "../../components/Loadind";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    <SafeAreaView style={[styles.safeArea, { backgroundColor: pokemon.color }]}>
      <FlatList
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  separator: {
    height: 16,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
