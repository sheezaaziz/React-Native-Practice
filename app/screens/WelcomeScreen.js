import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import colors from "../config/colors";
import AppButton from "../components/AppButton/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.backgroundContainer}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login"/>
        <AppButton title="register" color="secondary"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    // flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
})

export default WelcomeScreen;
