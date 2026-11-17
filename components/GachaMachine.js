import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Colors';

function Capsule({ color }) {
  return <View style={[styles.capsule, { backgroundColor: color }]} />;
}

export default function GachaMachine({ onTurn }) {
  const c = Colors.capsules;

  return (
    <View style={styles.machine}>
      <View style={styles.dome}>
        <View style={styles.capsuleRow}>
          <Capsule color={c[0]} />
          <Capsule color={c[1]} />
          <Capsule color={c[2]} />
        </View>
        <View style={styles.capsuleRow}>
          <Capsule color={c[3]} />
          <Capsule color={c[4]} />
          <Capsule color={c[0]} />
          <Capsule color={c[1]} />
        </View>
        <View style={styles.capsuleRow}>
          <Capsule color={c[2]} />
          <Capsule color={c[3]} />
          <Capsule color={c[4]} />
        </View>
      </View>

      <View style={styles.base}>
        <TouchableOpacity style={styles.knob} onPress={onTurn}>
          <Text style={styles.knobText}>TURN!</Text>
        </TouchableOpacity>
        <View style={styles.exitHole} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  machine: {
    alignItems: 'center',
    marginTop: 10,
  },
  dome: {
    width: 160,
    height: 114,
    backgroundColor: Colors.dome,
    borderWidth: 3,
    borderColor: Colors.ink,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
    paddingBottom: 6,
    overflow: 'hidden',
  },
  capsuleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  capsule: {
    width: 27,
    height: 27,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.ink,
    margin: 2,
  },
  base: {
    width: 180,
    height: 74,
    backgroundColor: Colors.machine,
    borderWidth: 3,
    borderColor: Colors.ink,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginTop: -3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  knob: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.knob,
    borderWidth: 3,
    borderColor: Colors.ink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  knobText: {
    fontSize: 13,
    fontWeight: '900',
    color: Colors.knobText,
  },
  exitHole: {
    width: 46,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.ink,
  },
});