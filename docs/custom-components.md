# Using custom components

I had mainly two motivations when started working on this package:

* I should be able to call alerts like native alert of react native.
* I should be able to customize title, subtitle and buttons so that same package can be used in each project with different themes.

If you want to customize alert title you can specify title as React native component mentioned [`RNAlertTitle` prop](./api.md#RNAlertTitle) when calling `alert` method of `RNFancyAlert`.

If you want to customize alert subtitle/body you can specify subtitle as React native component mentioned [`RNAlertSubtitle` prop](./api.md#RNAlertSubtitle) when calling `alert` method of `RNFancyAlert`.

If you want to customize alert buttons you can specify button options as mentioned [`RNAlertButton` options](./api.md#RNAlertButton) when calling `alert` method of `RNFancyAlert`.


```js
// App.jsx
import RNFancyAlert from 'react-native-fancy-alert';

export function App(props) {
  return (
    <>
      {...}
      <RNFancyAlert />
    </>
  );
}
```

Then just use alert with your customizations.

For example, if I want to show the alert title with my custom View:

```js
RNFancyAlert.alert({
  title: <View><Text>Its alert title inside react component</Text></View>,
});
```

Similarly if I want to use my custom UI for subtitle:

```js
RNFancyAlert.alert({
  title: "Alert",
  subtitle: (<View>
  <Text>Its alert body inside react component</Text>
  <Text>Body has another text</Text></View>)
});
```

Or if you want to use customize the buttons:

```js
RNFancyAlert.alert({
  title: "Alert",
  subtitle:'Are you sure to perform this action?'
  buttons: [
    {
        title: 'Delete',
        type: 'error',
        onPress: { () => {
            // fill this code with your requirements
        } }
    },
    {
        title: 'Cancel',
        role:'cancel'
    }
  ]
});
```

Since this `RNFancyAlert` was introduced to give developer more power to have fancy alerts for themselves so you can customize the buttons as well. For more details you can se[`RNAlertButton` options](./api.md#RNAlertButton). 

### Update 0.0.15
Since I made this package out of a use case and I'm using this for my purpose as well so while using it I realized that if I could apply custom styles while initializing then my alert syntax will become more cleaner and generic so I've introduced two extra props in RNFancyAlert and they are as follows:

`titleStyle` -> any textStyle can be passed
`subtitleStyle` -> any textStyle can be passed

So `RNFancyAlert` component can be initialized as follows:

```js
<RNFancyAlert titleStyle={{color:'tomato'}} subtitleStyle={{fontSize:14, fontWeight:'300'}} />
```