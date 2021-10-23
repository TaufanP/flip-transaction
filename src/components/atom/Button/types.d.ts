import { StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
}
