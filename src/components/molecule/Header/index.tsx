import React from "react";
import { View } from "react-native";
import { Button, Gap, TextItem } from "../../atom";
import { Arrow } from "../../../../assets";
import { colors, spacing as sp } from "../../../constants";

const Header = ({ onPress, label }: HeaderProps) => {
  return (
    <View
      style={{
        height: 48,
        width: "100%",
        backgroundColor: colors.white,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 48,
          height: 48,
        }}
        onPress={onPress}
      >
        <Arrow
          fill={colors.text1}
          width={16}
          height={16}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </Button>
      <Gap horizontal={sp.xs} />
      <TextItem type="b.16.text1">{label}</TextItem>
    </View>
  );
};

export default Header;
