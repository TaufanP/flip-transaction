import { StyleProp, View } from "react-native";

interface BaseProps {
  horizontal?: number | undefined;
  vertical?: number | undefined;
}

interface GapProps extends BaseProps {
  style?: StyleProp<View>;
}

interface StylesProps extends BaseProps {}

export type { GapProps, StylesProps };
