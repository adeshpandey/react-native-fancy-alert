import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { RNAlertTitleProps } from "../types";
import { renderElement } from "../utils";
export const RNAlertTitle = ({ title, titleStyle }: RNAlertTitleProps) => {
  return (
    <View>
      {React.Children.toArray(title).map((child, index) =>
        React.createElement(
          React.Fragment,
          { key: index },
          renderElement(
            child,
            Object.assign({
              style: StyleSheet.flatten([styles.title, titleStyle]),
              testID: "RNAlert__Title",
            })
          )
        )
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: Platform.OS === "ios" ? "500" : "600",
    marginBottom: 15,
  },
});
RNAlertTitle.displayName = "RNAlert.Title";
