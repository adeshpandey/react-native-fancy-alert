import React from "react";
import {
  Platform,
  StyleSheet, TouchableOpacity,
  View
} from "react-native";
import { RNAlertButtonProps } from "../types";
import { renderElement } from "../utils";

export default function RNAlertButton({title, containerStyle, buttonStyle, titleStyle, onPress}: RNAlertButtonProps) {

    return (
      <View style={[styles.container, containerStyle, containerStyle]}>
        <TouchableOpacity
          style={[styles.button, buttonStyle]}
          onPress={() => (onPress ? onPress() : undefined)}
        >
          <View>
            {React.Children.toArray(title).map((child, index) =>
              React.createElement(
                React.Fragment,
                { key: index },
                renderElement(
                  child,
                  Object.assign({ style: Object.assign({}, titleStyle) })
                )
              )
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  container: {
    overflow: "hidden",
  },
  title: Object.assign(
    { fontSize: 16, textAlign: "center", paddingVertical: 1 },
    Platform.select({
      android: {
        fontFamily: "sans-serif-medium",
      },
      default: {
        fontSize: 18,
      },
    })
  ),
  iconContainer: {
    marginHorizontal: 5,
  },
  loading: {
    marginVertical: 2,
  },
});
