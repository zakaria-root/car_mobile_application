import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import CarList from './components/carList';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
    <Header style={styles.header}/>
      <CarList/>
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
