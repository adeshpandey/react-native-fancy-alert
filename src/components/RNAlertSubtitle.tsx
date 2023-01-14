import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { RNAlertSubTitleProps } from "../types";
export const RNAlertSubtitle = ({
  title,
  titleStyle,
  titleProps,
}: RNAlertSubTitleProps) => {
  return React.createElement(
    Text,
    Object.assign(
      {
        style: StyleSheet.flatten([styles.title, titleStyle]),
        testID: "RNAlert__Subtitle",
      },
      titleProps
    ),
    title
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: Platform.OS === "ios" ? "200" : "300",
    marginBottom: 10,
  },
});
RNAlertSubtitle.displayName = "RNAlert.Subtitle";
