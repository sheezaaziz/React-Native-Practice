import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppTextV2 from '../components/AppTextV2/AppTextV2';
import ListItem from '../components/ListItem/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/chair.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppTextV2 style={styles.title}>White chair for sale</AppTextV2>
        <AppTextV2 style={styles.price}>$100</AppTextV2>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/favicon.png')}
            title="Sheeza Aziz"
            subtitle="5 Listings"
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  }
})

export default ListingDetailsScreen;
