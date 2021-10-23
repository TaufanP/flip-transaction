import { StyleSheet } from "react-native";
import { colors, spacing as sp } from "../../constants";

const BOX_HEIGHT = 48;
const HORIZONTAL_GAP = sp.xs;

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: HORIZONTAL_GAP,
    paddingBottom: sp.l,
  },

  filterButton: {
    height: BOX_HEIGHT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

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
});

export default styles;
