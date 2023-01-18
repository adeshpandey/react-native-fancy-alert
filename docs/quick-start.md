# Quick start

## Install

```sh
yarn add react-native-fancy-alert
# or
npm install --save react-native-fancy-alert
```

## Usage

Render the `RNFancyAlert` component in your app's entry file, as the **LAST CHILD** in the `View` hierarchy (along with any other components that might be rendered there):

```js
// App.jsx
import RNFancyAlert from 'react-native-fancy-alert';

export function App(props) {
  return (
    <>
      {/* ... */}
      <RNFancyAlert />
    </>
  );
}
```

Then use it anywhere in your app (even outside React components), by calling [`RNFancyAlert.alert` method](./api.md#methods) directly:

```js
// Foo.jsx
import RNFancyAlert from 'react-native-fancy-alert';
import { Button } from 'react-native'

export function Foo(props) {
  const showAlert = () => {
    RNFancyAlert.show({
      title: 'Delete',
      subtitle: 'Are you sure to perform this action?',
      buttons: [{
          title: "Delete",
          type: "error",
        },
        {
          title: "Cancel",
          role: "cancel",
        }]
    });
  }

  return (
    <Button
      title='Show toast'
      onPress={showAlert}
    />
  )
}
```

## What's next

Explore the following topics:

- [Using the RNFancyAlert API](./api.md)
- [Using custom Components](./custom-components.md)