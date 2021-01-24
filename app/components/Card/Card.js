import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../../config/colors';
import AppTextV2 from '../AppTextV2/AppTextV2';

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}/>
      <View style={styles.detailContainer}>
        <AppTextV2 style={styles.title}>{title}</AppTextV2>
        <AppTextV2 style={styles.subtitle}>{subtitle}</AppTextV2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  }
})

export default Card;
