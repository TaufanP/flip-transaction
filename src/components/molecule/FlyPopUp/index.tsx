import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
} from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { heightPercent } from "../../../helper";
import styles from "./styles";
import { FlyPopUpProps } from "./types";

const FlyPopUp = forwardRef<any, PropsWithChildren<FlyPopUpProps>>(
  ({ children }, ref) => {
    const hideHeight = heightPercent(120);
    const top = useSharedValue(hideHeight);
    const containerStyle = useAnimatedStyle(() => ({ top: top.value }));

    useImperativeHandle(ref, () => ({
      open: () => (top.value = withTiming(0)),
      close: () => (top.value = withTiming(hideHeight * 1.2)),
    }));

    return (
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.container, containerStyle]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => (top.value = withTiming(hideHeight))}
        >
          <Animated.View style={[StyleSheet.absoluteFill, styles.overlay]} />
        </TouchableOpacity>
        <Animated.View style={[styles.child]}>{children}</Animated.View>
      </Animated.View>
    );
  }
);

export default FlyPopUp;
