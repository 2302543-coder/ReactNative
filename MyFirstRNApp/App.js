import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivityLoader from './components/ActivityLoader';
import ButtonEx from './components/ButtonEx';
import MyFlatlist from './components/MyFlatlist';
import DisplayAnImage from './components/DisplayAnImage';
import Ibg from './components/Ibg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My React Native App</Text>
      <ActivityLoader /> 
       <ButtonEx />
       <MyFlatlist />
       <DisplayAnImage />
       <Ibg />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
