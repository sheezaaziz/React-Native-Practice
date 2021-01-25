import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Platform, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

import Screen from '../components/Screen/Screen';
import ListItem from '../components/ListItem/ListItem';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction/ListItemDeleteAction';

const initialMsgs = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/favicon.png')
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/favicon.png')
  },
]

function MessagesScreen() {
  const [msgs, setMsgs] = useState(initialMsgs);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg) => {
    // delete msg from msgs array.
    const newMsgs = msgs.filter(m => m.id !== msg.id);
    setMsgs(newMsgs);
  }

  return (
    <Screen>
      <FlatList
        data={msgs}
        keyExtractor={msg => msg.id.toString()}
        renderItem={({ item }) =>
        <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
          onPress={() => console.log()}
          renderRightActions={() =>
            <ListItemDeleteAction
              onPress={() => handleDelete(item)}/>
            }/>
          }
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMsgs([
              {
                id: 2,
                title: 't2',
                description: 'd2',
                image: require('../assets/favicon.png')
              }
            ])
          }}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
