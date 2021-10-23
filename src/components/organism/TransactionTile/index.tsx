import React from "react";
import { View } from "react-native";
import { ArrowTailed } from "../../../../assets";
import { colors, defaultValue as dv, spacing as sp } from "../../../constants";
import { currencyFormat } from "../../../helper";
import { dateFormater } from "../../../helper/dateFormat";
import { Button, Gap, TextItem } from "../../atom";
import styles from "./styles";

const bankTextType = (code: string) =>
  code?.length < 5 ? "b.16.text1.u" : "b.16.text1.c";

const TransactionTile = ({
  sender = "",
  beneficiary = "",
  name,
  amount,
  date,
  iSsuccess,
}: TransactionTileProps) => {
  const s = styles({ iSsuccess });
  const statusLabel = iSsuccess ? dv.success : dv.checking;
  const statusLabelColor = iSsuccess ? "white" : "text1";

  return (
    <Button>
      <View style={s.container}>
        <View style={s.child}>
          <View style={s.indicator}></View>
          <Gap horizontal={sp.sm} />
          <View style={s.detail}>
            <View style={s.banks}>
              <TextItem type={bankTextType(sender)}>{`${sender} `}</TextItem>
              <ArrowTailed
                fill={colors.text1}
                width={12}
                height={12}
                style={s.bankArrow}
              />
              <TextItem
                type={bankTextType(beneficiary)}
              >{` ${beneficiary}`}</TextItem>
            </View>
            <Gap vertical={sp.xxs} />
            <TextItem type="n.14.text1.u" numberOfLines={1}>
              {name}
            </TextItem>
            <Gap vertical={sp.xxs} />
            <TextItem type="n.14.text1" numberOfLines={1}>{`Rp${currencyFormat(
              amount
            )} • ${dateFormater(date)}`}</TextItem>
          </View>
        </View>
        <View style={s.child}>
          <Button style={s.seed}>
            <TextItem type={`b.14.${statusLabelColor}.c`}>
              {statusLabel}
            </TextItem>
          </Button>
          <Gap horizontal={sp.sm} />
        </View>
      </View>
    </Button>
  );
};

export default TransactionTile;
