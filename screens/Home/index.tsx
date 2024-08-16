import { StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput, View, Button } from 'react-native';
import Card from '../../components/Card';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Snorlax = require('../../assets/snorlax.png');
const Rayquaza = require('../../assets/rayquaza.png');


export default function Home() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();

    const handleCardPress = (item: any) => {
        navigation.navigate('Details', { item });
    };

    const loadFonts = async () => {
        await Font.loadAsync({
            'JokeyOne-Regular': require('../../assets/fonts/JockeyOne-Regular.ttf')
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    const data = [
        { id: '1', image: Snorlax, name: 'Snorlax', hp: '105', attack: '130', defense: '200', speed: '10', type: 'Normal' },
        { id: '2', image: Rayquaza, name: 'Rayquaza', hp: '200', attack: '+8000', defense: '400', speed: '200', type: 'Dragon' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>SPokeDex</Text>
            <View style={styles.search_container}>
                <TextInput style={styles.search} placeholder="Pesquisar" />
                <TouchableOpacity style={styles.search_button}>
                    <MaterialIcons name="search" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => handleCardPress(item)}>
                        <Card
                            name={item.name}
                            image={item.image}
                            hp={item.hp}
                            attack={item.attack}
                            defense={item.defense}
                            speed={item.speed}
                            type={item.type}
                        />
                    </TouchableOpacity>}
                keyExtractor={item => item.id}
            />
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
        padding: 5,
        backgroundColor: "#E38800",
        color: "white",
        borderRadius: 5,
    }
});
