# API

The `RNFancyAlert` API consists of:

1. [methods](#methods) that can be called directly on the `RNFancyAlert` object (in an _imperative_ way)
1. [props](#props) that can be passed to the `RNFancyAlert` component instance; they act as defaults for all Alerts that are shown

## methods

### `alert(options)`

To open an Alert, call the `alert()` method and pass the `options` that suit your needs. title is required but other options are optional

```js
import RnFancyAlert from 'react-native-fancy-alert'

RNFancyAlert.alert({
  title: 'Hello Alert',
  subtitle: 'This is an alert'
});
```

The complete set of **options** is described below:

| option           | description                                                                                                                                                                                     | type              | default value |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------- |
| `title`           | Title of the alert, It can be plain string or any React Component[Learn how to customize title](./custom-components.md)                                                            | `string|ReactNativeElement`          | `Alert`     |
| `subtitle`          | Alert body                                                                                                                                                                              | `string`          |               |
| `buttons`          | RNAlertButtons                                                                                                                                                                             | `array[RNAlertButton]`          |               |


### `RNAlertTitle`

RNAlertTitle is the view component which holds the title and we can pass plain string or any ReactNative Component as title. title option is rendered as child of RNAlertTitle.


### `RNAlertSubtitle`

RNAlertSubtitle is the view component which holds the subtitle or message body and we can pass plain string or any ReactNative Component as subtitle. subtitle option is rendered as child of RNAlertSubtitle.

### `RNAlertButtons`

RNAlertButtons holds the action buttons passed to the alert, It holds the array of RNAlertButton and It shows a button with text `Ok` by default.


### `RNAlertButton`

RNAlertButton holds the individual button object and we can pass following button **options** from alert method of RNFancyAlert:

| option           | description                                                                                                                                                                                     | type              | default value |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------- |
| `title`           | Title of the button, it can be plain text or any React Native Component[Learn how to customize title](./custom-components.md)                                                                  | `string|ReactNativeElement`|      |
| `role`          | Role of the button, valid option is `cancel`                                                                                                                                                     | `string`          |               |
| `type`          | `success` or `warning` or `error` or `default`                                                                                                                                                   | `string`          |`default`      |
| `onPress`         | Called when the button is pressed                                                                                                                                                              | `() => void`      |               |