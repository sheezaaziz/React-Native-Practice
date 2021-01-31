import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';
import AppTextV2 from '../AppTextV2/AppTextV2';

function ListItem({ image, ImageComponent, title, subtitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image}/>}
          <View style={styles.detailsContainer}>
            <AppTextV2 style={styles.title}>{title}</AppTextV2>
            {subtitle && <AppTextV2 style={styles.subtitle}>{subtitle}</AppTextV2>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
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
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  }
})

export default ListItem;
