import { PropsWithChildren, ReactElement } from "react";
import { StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";

export type AlertOptions = {
  title: string | ReactElement;
  subtitle?: string | ReactElement;
  buttons?: RNAlertButtonProps[];
  onShow?: () => void;
  onHide?: () => void;
  onPress?: () => void;
  backDropStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
};

export type RNAlertTitleProps = PropsWithChildren & {
  title: string | ReactElement;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
};

export type RNAlertSubTitleProps = {
  title?: string | ReactElement;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
};

export type RNFancyAlertRefProps = {
  show: Function;
}

export type AlertRefObj = {
  current: RNFancyAlertRefProps | null;
};

export type RNAlertButtonProps = PropsWithChildren & {
  containerStyle?: ViewStyle;
  titleStyle?: StyleProp<TextStyle & ViewStyle>;
  title: string | ReactElement;
  buttonStyle?: ViewStyle;
  onPress?: Function;
  type?: "success" | "warning" | "error" | "default";
  role?: "cancel";
};

export type RNAlertProps = {
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
};