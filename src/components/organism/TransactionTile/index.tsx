import React from "react";
import { View } from "react-native";
import { Button, TextItem, Gap } from "../../atom";
import { colors, spacing as sp } from "../../../constants";
import { ArrowTailed } from "../../../../assets";
import styles from "./styles";

const TransactionTile = ({
  sender = "",
  beneficiary = "",
  name,
  amount,
  date,
  status,
}: TransactionTileProps) => {
  return (
    <Button>
      <View style={styles.container}>
        <View style={styles.child}>
          <View style={styles.indicator}></View>
          <Gap horizontal={sp.sm} />
          <View style={styles.detail}>
            <View style={styles.banks}>
              <TextItem type="b.16.text1">{`${sender} `}</TextItem>
              <ArrowTailed
                fill={colors.text1}
                width={12}
                height={12}
                style={styles.bankArrow}
              />
              <TextItem type="b.16.text1">{` ${beneficiary}`}</TextItem>
            </View>
            <Gap vertical={sp.xxs} />
            <TextItem type="n.14.text1.u">{name}</TextItem>
            <Gap vertical={sp.xxs} />
            <TextItem type="n.14.text1">Rp10.028 • 8 April 2020</TextItem>
          </View>
        </View>
        <View style={styles.child}>
          <Button style={styles.seed}>
            <TextItem type="b.14.text1.c">pengecekan</TextItem>
          </Button>
          <Gap horizontal={sp.sm} />
        </View>
      </View>
    </Button>
  );
};

export default TransactionTile;
