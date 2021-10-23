import React, { PropsWithChildren } from "react";
import { Text } from "react-native";
import { colors } from "../../../constants";
import { TextItemProps } from "./types";

const transformFinder = (code: string) => {
  switch (code) {
    case "u":
      return "uppercase";
    case "c":
      return "capitalize";
    case "l":
      return "lowercase";

    default:
      return "none";
  }
};

const familyFinder = (code: string) => {
  switch (code) {
    case "n":
      return "normal";
    case "b":
      return "bold";

    default:
      return "normal";
  }
};

const styleGenerator = (code: string) => {
  if (!code) {
    return {};
  }
  const separated: Array<string> = code?.split(".");
  const [fontCode, size, colorCode, transform] = separated;
  //@ts-ignore
  const color = colors[colorCode];
  //@ts-ignore
  const fontWeight = familyFinder(fontCode);
  const fontSize = parseInt(size);
  const textTransform = transformFinder(transform);
  return { fontWeight, fontSize, color, textTransform };
};

const TextItem = ({
  style,
  children,
  type = "",
  ...props
}: PropsWithChildren<TextItemProps>) => {
  const textStyle = styleGenerator(type);
  return (
    <>
      {/* 
      // @ts-ignore */}
      <Text style={[textStyle, style]} {...props}>
        {children}
      </Text>
    </>
  );
};

export default TextItem;
