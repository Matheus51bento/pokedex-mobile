import { Text, StyleSheet, View } from "react-native";

interface TypeCardProps {
    color: string;
    content: string;
}

export default function TypeCard({ color, content }: TypeCardProps) {
    return (
        <View style={{ backgroundColor: color, borderRadius: 5, alignSelf: 'flex-start', marginTop: 5 }}>
            <Text style={styles.card}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        textAlign: 'center',
        paddingVertical: 4,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: 'white',
    }
});