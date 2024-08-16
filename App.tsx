import { StyleSheet, Text, FlatList, SafeAreaView, TextInput, View, Button } from 'react-native';
import Card from './components/Card';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      'JokeyOne-Regular': require('./assets/fonts/JockeyOne-Regular.ttf')
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const data = [
    { id: '1', name: 'Snorlax', hp: '105', attack: '130', defense: '200', speed: '10', type: 'Normal' },
    { id: '2', name: 'Rayquaza', hp: '200', attack: '+8000', defense: '400', speed: '200', type: 'Dragon' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text style={styles.title}>SPokeDex</Text>
      <View style={styles.search_container}>
        <TextInput style={styles.search} placeholder="Pesquisar" />
        <View style={styles.search_button}>
          <Button title='Buscar' color='white' />
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Card
            name={item.name}
            hp={item.hp}
            attack={item.attack}
            defense={item.defense}
            speed={item.speed}
            type={item.type}
          />}
        keyExtractor={item => item.id}
      />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E6C7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  list: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: '100%',
  },
  title: {
    fontFamily: 'JokeyOne-Regular',
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  search_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '90%',
  },
  search: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  search_button: {
    height: 40,
    width: 40,
    backgroundColor: "#E38800",
    color: "white",
    borderRadius: 5,
  }
});
