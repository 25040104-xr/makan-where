import { useState } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import places from './Data';
import Colors from './Colors';
import PlaceRow from './components/PlaceRow';
import GachaMachine from './components/GachaMachine';
import ResultCard from './components/ResultCard';
import EditScreen from './components/EditScreen';

export default function App() {
  const [placeList, setPlaceList] = useState(places);           
  const [location, setLocation] = useState('Republic Polytechnic');
  const [editId, setEditId] = useState(null);                    
  const [pickId, setPickId] = useState(null);
  const [locked, setLocked] = useState(false);                    

  const placesHere = placeList.filter(item => item.location === location);
  const areas = [...new Set(placesHere.map(item => item.area))];
  const sections = areas.map(area => ({
    title: area,
    data: placesHere.filter(item => item.area === area),
  }));

  const pickedPlace = placeList.find(item => item.id === pickId);

  function turnGacha() {
    if (placesHere.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * placesHere.length);
    setPickId(placesHere[randomIndex].id);
    setLocked(false);
  }

  function changeLocation(value) {
    setLocation(value);
    setPickId(null);
  }

  // Save the edited details
  function saveEdit(newName, newType, newArea, newFavourite) {
    const newList = placeList.map(item => {
      if (item.id === editId) {
        return {
          id: item.id,
          name: newName,
          type: newType,
          location: item.location,
          area: newArea,
          image: item.image,
          favourite: newFavourite,
        };
      }
      return item;
    });
    setPlaceList(newList);
    setEditId(null);
  }

  // Remove the stall being edited
  function deleteStall() {
    const newList = placeList.filter(item => item.id !== editId);
    setPlaceList(newList);
    if (pickId === editId) {
      setPickId(null);
    }
    setEditId(null);
  }

  // ----- Edit screen -----
  if (editId !== null) {
    const place = placeList.find(item => item.id === editId);
    return (
      <EditScreen
        place={place}
        areaOptions={areas}
        onSave={saveEdit}
        onDelete={deleteStall}
        onCancel={() => setEditId(null)}
      />
    );
  }

  // ----- Home screen -----
  const renderItem = ({ item, index }) => {
    return (
      <PlaceRow
        name={item.name}
        type={item.type}
        image={item.image}
        number={index + 1}
        favourite={item.favourite === true}
        onPress={() => setEditId(item.id)}
      />
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.header}>
        <View style={styles.headerDot} />
        <Text style={styles.headerText}>{section.title}</Text>
        <Text style={styles.headerCount}>{section.data.length} capsules</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Makan Where?</Text>

      <View style={styles.locationBox}>
        <Picker
          style={styles.pickerText}
          dropdownIconColor={Colors.ink}
          selectedValue={location}
          onValueChange={(value) => changeLocation(value)}
        >
          <Picker.Item label="Republic Polytechnic" value="Republic Polytechnic" />
          <Picker.Item label="Causeway Point" value="Causeway Point" />
        </Picker>
      </View>

      <GachaMachine onTurn={turnGacha} />

      {pickedPlace ? (
        <ResultCard
          place={pickedPlace}
          locked={locked}
          onAgain={turnGacha}
          onLock={() => setLocked(true)}
          onReset={() => {
            setPickId(null);
            setLocked(false);
          }}
        />
      ) : (
        <Text style={styles.tagline}>1 turn = 1 lunch. No refunds.</Text>
      )}

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.ink,
    paddingHorizontal: 20,
  },
  locationBox: {
    backgroundColor: Colors.card,
    borderWidth: 2,
    borderColor: Colors.ink,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: 10,
  },
  pickerText: {
    color: Colors.ink,
  },
  tagline: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.muted,
    marginTop: 8,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10,
  },
  headerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.machine,
    marginRight: 8,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '900',
    color: Colors.ink,
  },
  headerCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.muted,
  },
});