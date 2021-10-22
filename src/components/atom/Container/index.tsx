import React, { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "./styles";

const Container = ({ children }: PropsWithChildren<any>) => {
  const s = styles();
  return (
    <GestureHandlerRootView style={s.container}>
      {children}
    </GestureHandlerRootView>
  );
};

export default Container;
