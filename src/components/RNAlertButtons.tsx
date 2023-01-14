import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from "react-native";

export default function RNAlertButtons(props: PropsWithChildren) {
  return (
    <View style={styles.actionsView}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  actionsView: {
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});