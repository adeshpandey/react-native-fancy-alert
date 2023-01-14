import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

export const noop = () => undefined;

export const renderElement = (content: any, style: StyleProp<TextStyle>) => {
  {

    return typeof content == "string"
        ? React.createElement(
            Text,
            { style: Object.assign({}, style) },
            content
          )
        : content;
  }
};