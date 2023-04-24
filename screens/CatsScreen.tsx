import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { cats } from '../breeds';
import AnimalBreed from '../components/AnimalBreed';

const CATS = 'cats'

export default function CatsScreen({navigation}: any) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<any[]>();
  const [selectedAnimal, setSelectedAnimal] = useState(CATS);

  useEffect(() => {
    const filtered = cats.filter((animal) => animal.breed.toLowerCase().includes(search.toLowerCase()))
    setFilteredData(filtered)
  }, [search, selectedAnimal])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? "padding" : "height"}
        >
          <TextInput
            style={styles.searchInput}
            placeholder='Search'
            value={search}
            // onChangeText={(newText) => setSearch(newText)}
            onChangeText={setSearch} // same exact effect
          />
        </KeyboardAvoidingView>

        <FlatList
          style={{marginBottom: 50, paddingBottom: 100}}
          data={filteredData}
          renderItem={({ item }) => {
            return <AnimalBreed animal={item} title={`${item.breed}`} navigation={navigation} />
          }}
          keyExtractor={(item) => item.breed}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D415A',
    justifyContent: 'center',
  },
  searchInput: {
    backgroundColor: '#F7EEA7',
    borderRadius: 10,
    padding: 10,
    flex: 1.5,
    fontSize: 20,
    marginBottom: 10,
  },
  keyboardView: {
    marginTop: 100,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  switchToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
});

