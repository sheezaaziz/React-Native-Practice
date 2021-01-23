import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <View style={{
          backgroundColor: 'blue',
          width: '100%',
          height: landscape ? '30%' : '100%',
          flex: 1,
          flexDirection: 'row',
        }}>
      </View>
      <View style={{
          backgroundColor: 'tomato',
          flex: 1,
          width: 100,
          height: 100,
        }}/>
        <View style={{
            backgroundColor: 'gold',
            flex: 1,
            width: 100,
            height: 100,
          }}/>
        <View style={{
            backgroundColor: 'pink',
            flex: 1,
            width: 100,
            height: 100,
          }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
