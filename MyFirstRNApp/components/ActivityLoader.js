import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const ActivityLoader = () => (
  <View style={styles.horizontal}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
  },
});

export default ActivityLoader;
