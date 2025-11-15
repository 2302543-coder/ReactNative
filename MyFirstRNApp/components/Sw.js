import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const Sw = ({ isEnabled, toggleSwitch }) => (
  <View style={styles.container}>
    <Switch
      trackColor={{ false: '#888', true: '#fff' }}
      thumbColor={isEnabled ? '#fff' : '#000'}
      ios_backgroundColor="#555"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 10 },
});

export default Sw;
