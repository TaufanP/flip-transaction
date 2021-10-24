import { StyleSheet } from "react-native";
import { colors, spacing as sp } from "../../constants";
import { widthPercent, winHeightPercent } from "../../helper";

const BOX_HEIGHT = 48;
const HORIZONTAL_GAP = sp.xs;

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: HORIZONTAL_GAP,
    paddingBottom: sp.l,
  },

  empty: {
    flex: 1,
    height: winHeightPercent(80) - 48 - 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: widthPercent(10),
  },

  flex: { flex: 1 },

  input: { height: BOX_HEIGHT, flex: 1 },

  searchBox: {
    width: "100%",
    height: BOX_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  searchIcon: {
    width: BOX_HEIGHT,
    height: BOX_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  sortButton: {
    height: BOX_HEIGHT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
