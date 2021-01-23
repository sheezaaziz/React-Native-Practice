import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, Alert, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, world!</Text>
      <TouchableHighlight onPress={ () => console.log("img tapped") }>
        <Image blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}/>
      </TouchableHighlight>
      <Button
        color="white"
        title="Click mee!"
        onPress={() => console.log("btn clicked!")}
        />
      <Button color="orange" title="Click me 4 an alert alert" onPress={ () => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("she said yess!!")},
        {text: "No"}
      ])}/>
    <Button color="orange" title="Click me 4 an alert prompt" onPress={ () => Alert.prompt("My title", "My message", text => console.log("user entered: ", text))}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
