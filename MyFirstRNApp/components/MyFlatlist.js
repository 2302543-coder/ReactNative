import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MyFlatlist = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8, // matches other components
  },
  title: {
    fontSize: 18, // match App.js itemText
  },
});

export default MyFlatlist;
