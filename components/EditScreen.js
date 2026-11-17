import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Colors from '../Colors';

export default function EditScreen({ place, areaOptions, onSave, onDelete, onCancel }) {
  const [name, setName] = useState(place.name);
  const [type, setType] = useState(place.type);
  const [area, setArea] = useState(place.area);
  const [favourite, setFavourite] = useState(place.favourite === true);

  function confirmDelete() {
    Alert.alert(
      'Delete this stall?',
      name + ' will be removed from the list.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: onDelete },
      ]
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Edit stall</Text>

      <View style={styles.card}>
        <Image source={place.image} style={styles.image} />

        <TouchableOpacity style={styles.favButton} onPress={() => setFavourite(!favourite)}>
          <FontAwesome6 name="heart" solid={favourite} size={18} color={Colors.machine} />
          <Text style={styles.favText}>{favourite ? 'My favourite' : 'Add to favourites'}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Stall name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Food type</Text>
        <TextInput
          style={styles.input}
          value={type}
          onChangeText={(text) => setType(text)}
        />

        <Text style={styles.label}>Which food court?</Text>
        <View style={styles.pickerBox}>
          <Picker
            style={styles.pickerText}
            dropdownIconColor={Colors.ink}
            selectedValue={area}
            onValueChange={(value) => setArea(value)}
          >
            {areaOptions.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onSave(name, type, area, favourite)}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
          <FontAwesome6 name="trash-can" size={15} color={Colors.muted} />
          <Text style={styles.deleteText}>Delete stall</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.ink,
    marginBottom: 16,
  },
  card: {
    backgroundColor: Colors.card,
    borderWidth: 3,
    borderColor: Colors.ink,
    borderRadius: 24,
    padding: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: Colors.knob,
    alignSelf: 'center',
  },
  favButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.ink,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 12,
    marginBottom: 16,
  },
  favText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.ink,
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.ink,
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.ink,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: Colors.ink,
    marginBottom: 16,
  },
  pickerBox: {
    borderWidth: 2,
    borderColor: Colors.ink,
    borderRadius: 12,
    marginBottom: 20,
  },
  pickerText: {
    color: Colors.ink,
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 14,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.ink,
    backgroundColor: Colors.machine,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: Colors.card,
    marginRight: 12,
  },
  saveText: {
    color: Colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    color: Colors.ink,
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
  },
  deleteText: {
    color: Colors.muted,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});