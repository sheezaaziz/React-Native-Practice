import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.shadow}></View>
      <AppText>Hello, world! This is my first react app! This is me, learning react from a codewithmosh course!</AppText>
      <AntDesign name="home" size={60} color="black" />
      <AppButton title="login" onPress={() => console.log("tapped login!!")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: "pink",
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderTopWidth: 50,
    borderColor: "tomato",
    marginBottom: 20,
  },
  shadow: {
    backgroundColor: "dodgerblue",
    height: 100,
    width: 100,
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 20,
  },
})
