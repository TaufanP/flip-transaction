import { StyleSheet } from "react-native";
import { colors, spacing as sp } from "../../constants";
import { widthPercent } from "../../helper";

const styles = StyleSheet.create({
  box: {
    paddingVertical: sp.sm,
    paddingHorizontal: sp.m,
    backgroundColor: colors.white,
  },

  childFlex: { flex: 1 },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainerStyle: {
    paddingTop: sp.xs,
    paddingBottom: sp.l,
  },

  mainFlex: { flex: 1.75 },
  mask: {
    width: widthPercent(100),
    backgroundColor: colors.white1,
    position: "absolute",
  },

  rowCenter: { flexDirection: "row", alignItems: "center" },

  space: {
    justifyContent: "space-between",
  },

  tailedArrow: { transform: [{ rotate: "180deg" }] },
});

export default styles;
