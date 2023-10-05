import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './screens/login'; // Ensure the correct file path and file name

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
