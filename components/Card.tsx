import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CardText from '../components/CardText';
import TypeCard from '../components/TypeCard';

const Snorlax = require('../assets/snorlax.png');
const Pokebola = require('../assets/pokebola.png');

export default function Card() {
  return (
      <View style={styles.card}>
        <View style={{ marginVertical: 'auto' }}>
          <Image
            style={{ width: 160, height: 160, borderRadius: 50 }}
            source={Snorlax}
          />
        </View>
        <View style={styles.card_column}>
          <Text style={styles.card_title}>Snorlax</Text>
          <CardText title="HP" content="105" />
          <CardText title="ATTACK" content="+8000" />
          <CardText title="DEFENSE" content="105" />
          <CardText title="SPEED" content="105" />
          <TypeCard color="#f40" content="Normal" />
        </View>
        <View style={styles.card_column}>
          <View style={styles.pokenumber}>
            <Text style={{ textAlign: 'center', color: '#bab', fontWeight: 'bold' }}>N° 001</Text>
          </View>
        </View>
        <Image
          style={styles.backgroundImage}
          source={Pokebola}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    gap: 5,
    backgroundColor: 'white',
    width: '90%',
    height: 180,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    opacity: 1,
  },
  card_column: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pokenumber: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
});
