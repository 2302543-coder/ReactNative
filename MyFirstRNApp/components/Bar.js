import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform, StatusBar } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Bar = () => {
  const [hidden, setHidden] = useState(false);
  const [barStyle, setBarStyle] = useState(STYLES[0]);
  const [transition, setTransition] = useState(TRANSITIONS[0]);

  const toggleVisibility = () => setHidden(prev => !prev);
  const changeStyle = () => setBarStyle(STYLES[(STYLES.indexOf(barStyle) + 1) % STYLES.length]);
  const changeTransition = () => setTransition(TRANSITIONS[(TRANSITIONS.indexOf(transition) + 1) % TRANSITIONS.length]);

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        backgroundColor="#61dafb"
        barStyle={barStyle}
        showHideTransition={transition}
        hidden={hidden}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>StatusBar Visibility: {hidden ? 'Hidden' : 'Visible'}</Text>
        <Text style={styles.text}>StatusBar Style: {barStyle}</Text>
        {Platform.OS === 'ios' && <Text style={styles.text}>StatusBar Transition: {transition}</Text>}
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Toggle StatusBar" onPress={toggleVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStyle} />
        {Platform.OS === 'ios' && <Button title="Change Transition" onPress={changeTransition} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ECF0F1',
    borderRadius: 8,
    marginVertical: 10,
  },
  infoContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export default Bar;
