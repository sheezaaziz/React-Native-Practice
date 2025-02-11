import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from "../../config/colors";

function AppButton({ title, onPress, color="primary" }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default AppButton;
