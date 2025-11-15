import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const KeyBoard = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // Removed flex: 1 to avoid taking full screen
    width: '100%',
    padding: 10,
  },
  inner: {
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 12,
  },
  textInput: {
    height: 40,
    borderColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 5,
  },
  btnContainer: {
    marginTop: 10,
  },
});

export default KeyBoard;
