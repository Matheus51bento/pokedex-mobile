import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View, SafeAreaView, TextInput } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Snorlax = require("../../assets/rayquaza.png");



export default function Detail() {

    const router = useNavigation();
    const randomNumber = Math.floor(Math.random() * 1302) + 1;
    const handleGoBack = () => router.goBack();

    const SilhouetteImage = () => {
        return (
            <View style={styles.container}>
                <Image
                    source={Snorlax}
                    style={styles.image}
                />
            </View>
        );
    };

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
                <SilhouetteImage />
                <View>
                    <TextInput
                        style={styles.resposta}
                        placeholder="Sua Resposta"
                        placeholderTextColor="#fdf"
                        onChangeText={text => console.log(text)}
                    />
                    <TouchableOpacity onPress={() => alert('Você acertou!')} style={{ backgroundColor: '#fff', padding: 10, marginTop: 10 }}>
                        <Text style={{ color: '#6195A9', textAlign: 'center' }}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: "#6195A9" },
    separator: {
        height: 16,
    },
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
        width: 200,
        height: 200,
        tintColor: 'black',
        resizeMode: 'contain',
    },
    pokemon: {
        alignItems: "center",
        justifyContent: "center",
    },
});
