import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../Colors';

export default function PlaceRow({ name, type, image, number, favourite, onPress }) {
  const ringColor = Colors.capsules[(number - 1) % Colors.capsules.length];

  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Image source={image} style={[styles.image, { borderColor: ringColor }]} />
      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      {favourite && <FontAwesome6 name="heart" solid size={16} color={Colors.machine} />}
      <Text style={styles.number}>No.{number}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderWidth: 2,
    borderColor: Colors.ink,
    borderRadius: 40,
    paddingVertical: 7,
    paddingLeft: 7,
    paddingRight: 16,
    marginBottom: 10,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 3,
    marginRight: 12,
  },
  textBox: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.ink,
  },
  type: {
    fontSize: 12,
    color: Colors.muted,
    marginTop: 2,
  },
  number: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.ink,
    marginLeft: 8,
  },
});