import { StyleSheet } from "react-native";
import { colors, spacing as sp } from "../../../constants";
import { heightPercent, widthPercent } from "../../../helper";

const styles = StyleSheet.create({
  button: {
    width: widthPercent(100),
    height: heightPercent(100),
    position: "absolute",
  },

  child: {
    width: widthPercent(80),
    backgroundColor: colors.white,
    padding: sp.sm,
    borderRadius: 8,
    // position: "absolute",
  },
  container: {
    backgroundColor: "#0005",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: { position: "absolute" },
});

export default styles;
