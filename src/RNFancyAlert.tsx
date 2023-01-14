import React from "react";
import AlertUI from "./AlertUI";
import { AlertOptions, AlertRefObj, RNFancyAlertRefProps } from "./types";
import { useAlert } from "./useAlert";

const AlertRoot = React.forwardRef((props, ref) => {
  const { show, hide, isVisible, options } = useAlert();
  // This must use useCallback to ensure the ref doesn't get set to null and then a new ref every render.
  React.useImperativeHandle(
    ref,
    React.useCallback(
      () => ({
        show,
        hide,
      }),
      [hide, show]
    )
  );
  return (
    <AlertUI
      isVisible={isVisible}
      options={options}
      hide={hide}
      show={show}
      {...props}
    />
  );
});

let refs: AlertRefObj[] = [];

/**
 * Adds a ref to the end of the array, which will be used to show the toasts until its ref becomes null.
 *
 * @param newRef the new ref, which must be stable for the life of the Toast instance.
 */
function addNewRef(newRef: RNFancyAlertRefProps) {
  refs.push({
    current: newRef,
  });
}
/**
 * Removes the passed in ref from the file-level refs array using a strict equality check.
 *
 * @param oldRef the exact ref object to remove from the refs array.
 */
function removeOldRef(oldRef: RNFancyAlertRefProps | null) {
  refs = refs.filter((r) => r.current !== oldRef);
}
export function RNFancyAlert() {
  const alertRef = React.useRef<RNFancyAlertRefProps | null>(null);
  /*
      This must use `useCallback` to ensure the ref doesn't get set to null and then a new ref every render.
      Failure to do so will cause whichever Toast *renders or re-renders* last to be the instance that is used,
      rather than being the Toast that was *mounted* last.
    */
  const setRef = React.useCallback((ref: RNFancyAlertRefProps) => {
    // Since we know there's a ref, we'll update `refs` to use it.
    if (ref) {
      // store the ref in this toast instance to be able to remove it from the array later when the ref becomes null.
      alertRef.current = ref;
      addNewRef(ref);
    } else {
      // remove the this toast's ref, wherever it is in the array.
      removeOldRef(alertRef.current);
    }
  }, []);
  return (<AlertRoot ref={setRef} />
  );
}

export function getRef() {
  const reversePriority = [...refs].reverse();
  const activeRef = reversePriority.find((ref) => ref?.current !== null);
  if (!activeRef) {
    return null;
  }
  return activeRef.current;
}

RNFancyAlert.alert = (options: AlertOptions) => {
  getRef()?.show(options);
};