import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
};
export default App;
