import React from 'react';
import { Text, StyleSheet } from 'react-native';


function AppTextV2({ children, style }) {
  return (
    <Text style={[styles.text, style]}>{ children }</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Avenir',
    textTransform: "capitalize",
    textAlign: "left",
    lineHeight: 30,
  }
})

export default AppTextV2;
