import React, { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "./types";

const Button = ({
  children,
  style,
  onPress,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
