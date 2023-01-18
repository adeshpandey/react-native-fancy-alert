import React from "react";
import { Dimensions, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import RNAlertButton from "./components/RNAlertButton";
import RNAlertButtons from "./components/RNAlertButtons";
import { RNAlertSubtitle } from "./components/RNAlertSubtitle";
import { RNAlertTitle } from "./components/RNAlertTitle";
import { AlertOptions } from "./types";

export default function AlertUI({
  isVisible,
  options,
  hide,
  show,
}: {
  isVisible: boolean;
  options: AlertOptions;
  hide: Function;
  show: Function;
}) {
  const { buttons, title, subtitle, onPress } = options;
  return (
    <Modal visible={isVisible}>
      <Pressable style={styles.backdrop}>
        <View style={styles.container}>
          <View style={styles.overlay}>
            <RNAlertTitle title={title} />
            {subtitle && <RNAlertSubtitle title={subtitle} />}
            <RNAlertButtons>
              {buttons?.map((btn, i) =>
                React.createElement(
                  RNAlertButton,
                  Object.assign(
                    {},
                    {
                      containerStyle: Object.assign(
                        { marginHorizontal: 5 },
                        btn.containerStyle
                      ),
                      titleStyle: Object.assign(
                        {},
                        btn.type ? styles[btn.type] : styles.default,
                        btn.titleStyle
                      ),
                      buttonStyle: Object.assign({}, btn.buttonStyle),
                      key: i,
                      title: btn.title,
                      onPress: () => {
                        if (btn.onPress) btn.onPress();
                        hide();
                      },
                    }
                  )
                )
              )}
            </RNAlertButtons>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  success: {
    color: "#52c41a",
    fontWeight: "600",
  },
  warning: {
    color: "#faad14",
    fontWeight: "600",
  },
  error: {
    color: "#ff4d4f",
    fontWeight: "600",
  },
  default: {
    color: "#333",
    fontWeight: "600",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: Object.assign(
    {
      width: Dimensions.get("screen").width * 0.8,
      backgroundColor: "white",
      borderRadius: 3,
      padding: 10,
    },
    Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: "rgba(0, 0, 0, .3)",
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
    })
  ),
});
