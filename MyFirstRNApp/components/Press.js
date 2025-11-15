import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Press = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  const textLog =
    timesPressed > 1 ? `${timesPressed}x onPress` : timesPressed === 1 ? 'onPress' : '';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setTimesPressed((current) => current + 1)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>

      <View style={styles.logBox}>
        <Text>{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logBox: {
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
});

export default Press;
