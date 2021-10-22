import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

const styles = () =>
  StyleSheet.create({
    container: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      position: "absolute",
      backgroundColor: colors.white1,
    },
  });

export default styles;
