import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // stack images vertically
    alignItems: 'center',
    margin: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => (
  <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={require('../assets/react-native-logo.png')}
    />
    <Image
      style={styles.tinyLogo}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
    <Image
      style={styles.logo}
      source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
      }}
    />
  </View>
);

export default DisplayAnImage;
