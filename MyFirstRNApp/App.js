import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ActivityLoader from './components/ActivityLoader';
import ButtonEx from './components/ButtonEx';
import DisplayAnImage from './components/DisplayAnImage';
import Ibg from './components/Ibg';
import KeyBoard from './components/KeyBoard';
import Mods from './components/Mods';
import Press from './components/Press';
import Refresh from './components/Refresh';


export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My React Native App</Text>

      {/* Row 1 */}
      <View style={styles.row}>
        <ActivityLoader />
        <ButtonEx />
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <DisplayAnImage />
        <Ibg />
        <KeyBoard />
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        <Mods />
        <Press />
        <Refresh/>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'beige',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
});
