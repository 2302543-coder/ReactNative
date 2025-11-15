import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Te = () => (
  <View style={styles.container}>
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10, 
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  innerText: {
    color: 'red',
  },
});

export default Te;
