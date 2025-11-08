import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivityLoader from './components/ActivityLoader';
import ButtonEx from './components/ButtonEx';
import MyFlatlist from './components/MyFlatlist';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>My React Native App</Text>
      <ActivityLoader /> 
       <ButtonEx />
       <MyFlatlist />
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
