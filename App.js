import React from 'react';
import { View, StyleSheet } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen/Screen';
import Card from './app/components/Card/Card';
import Icon from './app/components/Icon/Icon';

export default function App() {
  return (
    <Screen>
      <Icon
        size={50}
        name="mail"
        backgroundColor="blue"
        iconColor="white"
        />
    </Screen>
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
