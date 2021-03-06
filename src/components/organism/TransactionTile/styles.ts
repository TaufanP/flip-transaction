import { StyleSheet } from "react-native";
import { colors, spacing as sp } from "../../../constants";

const styles = ({ iSsuccess }: { iSsuccess: boolean }) =>
  StyleSheet.create({
    bankArrow: { transform: [{ rotate: "180deg" }] },
    banks: { flexDirection: "row", alignItems: "center" },

    child: { flexDirection: "row" },
    container: {
      borderRadius: 8,
      overflow: "hidden",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.white,
    },

    detail: { paddingVertical: sp.sm },

    indicator: {
      width: 8,
      backgroundColor: iSsuccess ? colors.green1 : colors.primary1,
    },

    seed: {
      paddingVertical: sp.xxs,
      paddingHorizontal: sp.xs,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: iSsuccess ? colors.green1 : colors.primary1,
      backgroundColor: iSsuccess ? colors.green1 : "transparent",
    },
  });

export default styles;
