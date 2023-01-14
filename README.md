# react-native-fancy-alert

### How to use

Add Following in your App.jsx/App.tsx

```
import RNFancyAlert from 'react-native-fancy-alert';
<RNFancyAlert />
```
then call something like below whenever you need to call the fancy alert.

```
RNFancyAlert.alert({
    title: "any string or react element", 
    subtitle: "any string or react element",
    buttons: [{title: "Okay"},{"role":"cancel", "title":"Cancel"}]})

```

Demo App Example
```
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import RNFancyAlert from 'react-native-fancy-alert';

export default function App() {

  const showAlert = () => {

    const randint = Math.floor(Math.random() * 3); 
    RNFancyAlert.alert({
      title: <Text h1 style={{color:"tomato"}}>Hey its a fancy Alert</Text>,
      subtitle: "Its sub title",
      buttons: [
        {
          title: <Text h3>Hi</Text>,
          onPress: () => Alert.alert("You clicked!"),
          role: "cancel",
          type: "success",
          titleStyle: { color: "tomato" },
        },
        { title: "Bye" },
      ],
    });
  }  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showAlert}>
        <Text>ShowAlert</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <RNFancyAlert />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```