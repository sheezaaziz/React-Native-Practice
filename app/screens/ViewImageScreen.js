import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from "../config/colors";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Ionicons name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <AntDesign name="delete" size={28} color="white" />
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles.image}
        resizeMode="contain"/>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 70,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 70,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    // flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

export default ViewImageScreen;
