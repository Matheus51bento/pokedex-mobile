import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
    Details: { item: any };
  };
  
  type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
  
export default function Detail() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});
