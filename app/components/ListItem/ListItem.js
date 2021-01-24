import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../../config/colors';
import AppTextV2 from '../AppTextV2/AppTextV2';

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <AppTextV2 style={styles.title}>{title}</AppTextV2>
        <AppTextV2 style={styles.subtitle}>{subtitle}</AppTextV2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: colors.medium,
  }
})

export default ListItem;
