import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import ActivityLoader from './components/ActivityLoader';
import ButtonEx from './components/ButtonEx';
import DisplayAnImage from './components/DisplayAnImage';
import Ibg from './components/Ibg';
import KeyBoard from './components/KeyBoard';
import Mods from './components/Mods';
import Press from './components/Press';
import Refresh from './components/Refresh';
import Scroll from './components/Scroll';
import Bar from './components/Bar';
import Sw from './components/Sw';

const SECTION_DATA = [
  { title: 'Main dishes', data: ['Pizza', 'Burger', 'Risotto'] },
  { title: 'Sides', data: ['French Fries', 'Onion Rings', 'Fried Shrimps'] },
  { title: 'Drinks', data: ['Water', 'Coke', 'Beer'] },
  { title: 'Desserts', data: ['Cheese Cake', 'Ice Cream'] },
];

export default function App() {
  const [bgEnabled, setBgEnabled] = useState(false); // Background toggle

  const toggleBg = () => setBgEnabled(prev => !prev);

  const renderHeader = () => (
    <View>
      <Text style={styles.title}>My React Native App</Text>

      <View style={styles.row}>
        <ActivityLoader />
        <ButtonEx />
      </View>

      <View style={styles.row}>
        <DisplayAnImage />
        <Ibg />
        <KeyBoard />
      </View>

      <View style={styles.row}>
        <Mods />
        <Press />
        <Refresh />
      </View>

      <View style={styles.row}>
        <Bar />
        <Sw isEnabled={bgEnabled} toggleSwitch={toggleBg} />
      </View>

      <Scroll />
    </View>
  );

  return (
    <SectionList
      sections={SECTION_DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{title}</Text>
        </View>
      )}
      ListHeaderComponent={renderHeader} 
      contentContainerStyle={{
        paddingBottom: 20,
        backgroundColor: bgEnabled ? '#81b0ff' : '#fff', // <-- Background changes here
      }}
    />
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20, textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, flexWrap: 'wrap' },
  item: { backgroundColor: '#f9c2ff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 8 },
  itemText: { fontSize: 18 },
  headerContainer: { backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  header: { fontSize: 24, fontWeight: 'bold' },
});
