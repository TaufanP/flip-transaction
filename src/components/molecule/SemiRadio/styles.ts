import { StyleSheet } from "react-native";
import { colors, spacing as sp } from "../../../constants";

const OUTER_SIZE = 16;
const INNER_SIZE = OUTER_SIZE - 8;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sp.sm,
  },

  inner: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE,
    backgroundColor: colors.primary1,
  },

  outer: {
    width: OUTER_SIZE,
    height: OUTER_SIZE,
    borderRadius: OUTER_SIZE,
    borderWidth: 2,
    borderColor: colors.primary1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
