import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { RNAlertSubTitleProps } from "../types";
import { renderElement } from "../utils";
export const RNAlertSubtitle = ({
  title,
  titleStyle,
  titleProps,
}: RNAlertSubTitleProps) => {

  return <View>
    {React.Children.toArray(title).map((child, index) =>
      React.createElement(
        React.Fragment,
        { key: index },
        renderElement(
          child,
          Object.assign(
            {
              style: StyleSheet.flatten([styles.title, titleStyle]),
              testID: "RNAlert__Subtitle",
            },
            titleProps
          )
        )
      )
    )}
  </View>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: Platform.OS === "ios" ? "200" : "300",
    marginBottom: 10,
  },
});
RNAlertSubtitle.displayName = "RNAlert.Subtitle";
