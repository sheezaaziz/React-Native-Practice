import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Screen from '../components/Screen/Screen';
import ListItem from '../components/ListItem/ListItem';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';
import Icon from '../components/Icon/Icon';
import colors from '../config/colors';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "mail",
      backgroundColor: colors.primary,
    }
  },
  {
    title: "My Emails",
    icon: {
      name: "mail",
      backgroundColor: colors.secondary,
    }
  }
]

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="sheeza aziz"
          subtitle="sheeza.aziz@utoronto.ca"
          image={require('../assets/favicon.png')}/>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) =>
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  />
              }/>
          }/>
      </View>

      <View>
        <ListItem
          title="Log Out"
          ImageComponent={
            <Icon
              name="logout"
              backgroundColor="#ffe66d"/>
          }/>
      </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  }
})

export default AccountScreen;
