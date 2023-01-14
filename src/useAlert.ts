import React from "react";
import { AlertOptions, RNAlertButtonProps } from "./types";

const DEFAULT_OPTIONS: AlertOptions = {
  onShow: () => {},
  onHide: () => {},
  onPress: () => {},
  title: "Alert",
  subtitle: undefined,
};

export function useAlert() {
  const [isVisible, setIsVisible] = React.useState(false);
  const initialOptions:AlertOptions = {
    ...DEFAULT_OPTIONS,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {},
    title: "Alert",
    buttons: [],
  };
  const [options, setOptions] = React.useState(initialOptions);

  const hide = React.useCallback(() => {
    setIsVisible(false);
    if(options.onHide)
      options.onHide();
  }, [options]);
  const show = React.useCallback(
    (params: AlertOptions) => {
      const {
        onShow = initialOptions.onShow,
        onHide = initialOptions.onHide,
        onPress = initialOptions.onPress,
        buttons = initialOptions.buttons,
        title = initialOptions.title,
        subtitle = initialOptions.subtitle,
      } = params;

      const defaultBtn: RNAlertButtonProps = {
        title: "Ok",
        role: "cancel",
        onPress: hide,
      };
      let actionButtons = [defaultBtn];
      if (buttons && !buttons.some((v) => v?.role == "cancel")) {
        actionButtons = [...actionButtons, ...buttons];
      } else {
        if (buttons) actionButtons = buttons;
      }

      setOptions({
        ...initialOptions,
        title,
        subtitle,
        buttons: actionButtons,
        onShow,
        onHide,
        onPress,
      });
      setIsVisible(true);
      if(onShow)
      onShow();
    },
    [initialOptions]
  );
  return {
    isVisible,
    options,
    show,
    hide,
  };
}
