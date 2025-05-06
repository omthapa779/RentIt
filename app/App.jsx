import React from 'react';
import { StyleSheet, View, Image, Text,Button } from 'react-native';

export default function App() {
//     logo and text
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.text}>Rental Platform Nepal 🇳🇵</Text>
      <Button title="Rent an Item now!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
