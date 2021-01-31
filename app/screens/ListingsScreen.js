import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen/Screen';
import Card from '../components/Card/Card';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'chair for sale',
    price: 100,
    image: require('../assets/chair.jpg')
  },
  {
    id: 2,
    title: 'favicon gr8 condition',
    price: 20,
    image: require('../assets/favicon.png')
  }
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}/>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,

  }
})

export default ListingsScreen;
