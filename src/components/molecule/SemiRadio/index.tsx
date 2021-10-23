import React from "react";
import { View } from "react-native";
import { spacing as sp } from "../../../constants";
import { Button, Gap, TextItem } from "../../atom";
import styles from "./styles";

const SemiRadio = ({ label, isSelected = false }: SemiRadioProps) => {
  return (
    <Button>
      <View style={styles.container}>
        <View style={styles.outer}>
          {isSelected && <View style={styles.inner} />}
        </View>
        <Gap horizontal={sp.xs} />
        <TextItem type="n.14.text1">{label}</TextItem>
      </View>
    </Button>
  );
};

export default SemiRadio;
