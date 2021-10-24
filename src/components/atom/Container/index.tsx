import React, { PropsWithChildren } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { colors } from "../../../constants";
import styles from "./styles";

const Container = ({ children }: PropsWithChildren<any>) => {
  const s = styles();
  return (
    <GestureHandlerRootView style={s.container}>
      <StatusBar backgroundColor={colors.white} barStyle={`dark-content`} />
      {children}
    </GestureHandlerRootView>
  );
};

export default Container;
