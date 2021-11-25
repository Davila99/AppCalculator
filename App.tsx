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
      <View style={styles.containerFondo}>
      <View style={styles.container}>
        <Text style={styles.text}>App Nica</Text>
      </View>
        {/* <ListPersons/> */}
        <Calculator/>
        {/* <Edad/> */}

      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:27,
    paddingVertical:40
  },
  text:{
   fontSize:40,
   fontWeight:'normal',
   color:'#034C50'
  },
  containerFondo:{
    backgroundColor:'#C0E3E6',
    flex:1,
    alignItems:'center'
  }

})

