import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../Colors';

export default function ResultCard({ place, locked, onAgain, onLock, onReset }) {
  return (
    <View style={[styles.card, locked && styles.cardLocked]}>
      <View style={styles.topRow}>
        <Image source={place.image} style={styles.image} />
        <View style={styles.textBox}>
          <Text style={styles.label}>
            {locked ? "TODAY'S LUNCH IS LOCKED" : "TODAY'S CAPSULE"}
          </Text>
          <Text style={styles.name}>
            {locked ? 'Enjoy your ' + place.name + '!' : place.name}
          </Text>
          <Text style={styles.area}>@ {place.area}</Text>
        </View>
        {locked && <FontAwesome6 name="lock" size={18} color={Colors.machine} />}
      </View>

      {locked ? (
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetText}>Change my mind</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.button, styles.againButton]} onPress={onAgain}>
            <Text style={styles.againText}>Spin again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onLock}>
            <Text style={styles.lockText}>Lock it in</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderWidth: 2,
    borderColor: Colors.ink,
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 12,
  },
  cardLocked: {
    borderWidth: 3,
    borderColor: Colors.machine,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors.knob,
    marginRight: 12,
  },
  textBox: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.muted,
  },
  name: {
    fontSize: 19,
    fontWeight: '900',
    color: Colors.ink,
  },
  area: {
    fontSize: 12,
    color: Colors.muted,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: Colors.ink,
    backgroundColor: Colors.machine,
    alignItems: 'center',
  },
  againButton: {
    backgroundColor: Colors.card,
    marginRight: 10,
  },
  againText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.ink,
  },
  lockText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.buttonText,
  },
  resetButton: {
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  resetText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.muted,
    textDecorationLine: 'underline',
  },
});