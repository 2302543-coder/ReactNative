import React from 'react';
import { View, Text } from 'react-native';

const Hello = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
    <View style={{ height: 100, backgroundColor: 'blue', flex: 0.2, marginRight: 5 }} />
    <View style={{ height: 100, backgroundColor: 'red', flex: 0.4, marginRight: 5 }} />
    <Text style={{ fontSize: 16 }}>Hello World!</Text>
  </View>
);

export default React.memo(Hello);
