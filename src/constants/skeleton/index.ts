import { spacing as sp } from "../spacing";
import { widthPercent } from "../../helper";

export const layout = {
  transactions: [
    { key: "header", width: "100%", height: 48, marginBottom: 8 },
    {
      key: "tile1",
      width: widthPercent(100) - sp.sm,
      height: 88,
      marginBottom: sp.sm,
      marginLeft: 8,
    },
    {
      key: "tile2",
      width: widthPercent(100) - sp.sm,
      height: 88,
      marginBottom: sp.sm,
      marginLeft: 8,
    },
  ],
};
