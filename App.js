import React from 'react';
import { View, StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from './app/components/Card/Card';

export default function App() {
  return (
    <ViewImageScreen/>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  }
})
// <View style={styles.cardContainer}>
//   <Card
//     title="A white chair for sale!"
//     subtitle="$100"
//     image={require('./app/assets/chair.jpg')}/>
// </View>
