import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Alert, Text, Image, View, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getPokemonById } from "../../service/ApiService";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../components/Loadind";

export default function Detail() {
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [inputText, setInputText] = useState("");
    const [showSilhouette, setShowSilhouette] = useState(true);

    const router = useNavigation();
    const handleGoBack = () => router.goBack();

    const handleSubmit = () => {
        if (pokemon?.name.toLowerCase() === inputText.toLowerCase()) {
            Alert.alert("Você acertou!", `Parabéns, você adivinhou o Pokémon corretamente!`);
        } else {
            Alert.alert("Você errou!", `O Pokémon correto era ${pokemon?.name}.`);
        }
        setInputText("");
        setShowSilhouette(false);
    };

    const SilhouetteImage = ({ imageUrl }: { imageUrl: string | null }) => {
        return (
            <View style={styles.container}>
                {imageUrl ? (
                    <Image
                        source={{ uri: imageUrl }}
                        style={[
                            styles.image,
                            showSilhouette ? { tintColor: 'black' } : { tintColor: null }
                        ]}
                    />
                ) : null}
            </View>
        );
    };

    useEffect(() => {
        setLoading(true);
        getData();
    }, []);

    async function getData() {
        try {
            const randomNumber = Math.floor(Math.random() * 1010) + 1;

            const data = await getPokemonById(randomNumber);
            setPokemon(data);

            setLoading(false);
            setShowSilhouette(true);
        } catch (err) {
            console.log(err);
        }
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton} onPress={handleGoBack}>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>SPokeDex</Text>
                <Text></Text>
            </View>
            <Text style={styles.game}>Quem é esse Pokemon?</Text>
            <View style={styles.pokemon} >
                <SilhouetteImage imageUrl={pokemon?.sprites?.front_default ?? null} />
                <View>
                    <TextInput
                        style={styles.resposta}
                        placeholder="Sua Resposta"
                        placeholderTextColor="#fdf"
                        value={inputText}
                        onChangeText={text => setInputText(text)}
                    />
                    <TouchableOpacity onPress={() => handleSubmit()} style={{ backgroundColor: '#fff', padding: 10, marginTop: 10 }}>
                        <Text style={{ color: '#6195A9', textAlign: 'center' }}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => getData()} style={{ backgroundColor: '#fff', padding: 10, marginTop: 10 }}>
                        <Text style={{ color: '#6195A9', textAlign: 'center' }}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#6195A9" },
    resposta: {
        backgroundColor: '#0090A9',
        color: '#fff',
        padding: 10,
        width: 200,
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 10,
    },
    container: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        marginHorizontal: 16,
    },
    headerTitle: {
        fontFamily: "JokeyOne-Regular",
        fontSize: 48,
        lineHeight: 50,
        fontWeight: "bold",
        color: "#fff",
    },
    headerButton: {
        marginTop: -10,
    },
    game: {
        color: "#fff",
        fontFamily: "JokeyOne-Regular",
        fontSize: 20,
        textAlign: "center",
    },
    image: {
        width: 300,
        height: 300,
        tintColor: 'black',
        resizeMode: 'contain',
    },
    pokemon: {
        alignItems: "center",
        justifyContent: "center",
    },
});
