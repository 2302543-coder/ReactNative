import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const Ibg = () => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={styles.text}>Inside</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000080',
  },
});

export default Ibg;
