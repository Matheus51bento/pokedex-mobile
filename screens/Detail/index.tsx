import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DetailsHeader } from "../../components/DetailsHeader";
import { Note } from "../../components/Note";

type RootStackParamList = {
  Details: { item: any };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

export default function Detail() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={<DetailsHeader />}
        data={[1, 2, 3]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={() => <Note />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#6195A9" },
  separator: {
    height: 16,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
