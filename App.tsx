import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './src/screens/Calculator';
import Edad from './src/screens/Edad';
import ListPersons from './src/screens/ListPersons';

export default function App() {
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <ListPersons/> */}
        {/* <Calculator/> */}
        <Edad/>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
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
