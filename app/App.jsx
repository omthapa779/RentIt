import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.text}>Rental Platform Nepal 🇳🇵</Text>
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
