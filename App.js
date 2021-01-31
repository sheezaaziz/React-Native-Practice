import React from 'react';
import { View, StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen/Screen';
import Card from './app/components/Card/Card';
import Icon from './app/components/Icon/Icon';
import ListItem from './app/components/ListItem/ListItem';

export default function App() {
  return (
    <ListingsScreen/>
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
