import React from 'react';
import { StyleSheet, Text, View, RefreshControl } from 'react-native';

const Refresh = ({ refreshing, onRefresh }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pull down to refresh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Refresh;
