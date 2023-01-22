import React from "react";
import { Text, TextProps } from "react-native";

export const noop = () => undefined;

export const renderElement = (content: any, props: TextProps) => {
  {

    return typeof content == "string"
        ? React.createElement(
            Text,
            props,
            content
          )
        : content;
  }
};