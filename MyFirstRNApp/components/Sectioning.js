import React from 'react';
import { SectionList, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const SECTION_DATA = [
  { title: 'Main dishes', data: ['Pizza', 'Burger', 'Risotto'] },
  { title: 'Sides', data: ['French Fries', 'Onion Rings', 'Fried Shrimps'] },
  { title: 'Drinks', data: ['Water', 'Coke', 'Beer'] },
  { title: 'Desserts', data: ['Cheese Cake', 'Ice Cream'] },
];

const Sectioning = ({ ListHeaderComponent }) => (
  <SafeAreaView style={{ flex: 1 }}>
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
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ flex: 1 }}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  item: { backgroundColor: '#f9c2ff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 8 },
  itemText: { fontSize: 18 },
  headerContainer: { backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  header: { fontSize: 24, fontWeight: 'bold' },
});

export default Sectioning;
