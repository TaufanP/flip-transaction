import {
  CompositeNavigationProp,
  RouteProp,
  useRoute,
} from "@react-navigation/core";
import React, { useRef } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ArrowTailed } from "../../../assets";
import { Button, Container, Gap, Header, TextItem } from "../../components";
import { colors, spacing as sp } from "../../constants";
import { currencyFormat } from "../../helper";
import { dateFormater } from "../../helper/dateFormat";
import { StackParamsList } from "../../types/screens";
import styles from "./styles";

interface TransactionDetailProps {
  navigation: CompositeNavigationProp<any, any>;
}

const TransactionDetail = ({ navigation }: TransactionDetailProps) => {
  const route = useRoute<RouteProp<StackParamsList, "TRANSACTION_DETAIL">>();
  const isMounted = useRef<boolean>();

  const {
    beneficiary_bank,
    sender_bank,
    id,
    beneficiary_name,
    account_number,
    amount,
    unique_code,
    remark,
    status,
    created_at,
  } = route.params;

  return (
    <Container>
      <Header label={"Rincian Transaksi"} onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={[styles.box, styles.container]}>
          <TextItem type="b.16.text1.u">{`ID TRANSAKSI: #${id}`}</TextItem>
        </View>
        <Gap vertical={sp.xxs} />
        <View style={[styles.box, styles.container, styles.space]}>
          <TextItem type="b.16.text1.u">detail transaksi </TextItem>
          <Button>
            <TextItem type="n.14.primary1.c">tutup</TextItem>
          </Button>
        </View>
        <Gap vertical={sp.xxs} />
        <View style={styles.box}>
          <View style={styles.rowCenter}>
            <TextItem type={"b.16.text1.u"}>{sender_bank}</TextItem>
            <ArrowTailed
              fill={colors.text1}
              width={12}
              height={12}
              style={styles.tailedArrow}
            />
            <TextItem type={"b.16.text1.u"}>{beneficiary_bank}</TextItem>
          </View>

          <Gap vertical={sp.sm} />
          <View style={styles.rowCenter}>
            <View style={styles.mainFlex}>
              <TextItem type="b.14.text1.u">{beneficiary_name}</TextItem>
              <TextItem type="n.14.text1">{account_number}</TextItem>
            </View>
            <View style={styles.childFlex}>
              <TextItem type="b.14.text1.u">nominal</TextItem>
              <TextItem type="n.14.text1">Rp{currencyFormat(amount)}</TextItem>
            </View>
          </View>
          <Gap vertical={sp.sm} />
          <View style={styles.rowCenter}>
            <View style={styles.mainFlex}>
              <TextItem type="b.14.text1.u">berita transfer</TextItem>
              <TextItem type="n.14.text1">{remark}</TextItem>
            </View>
            <View style={styles.childFlex}>
              <TextItem type="b.14.text1.u">kode unik</TextItem>
              <TextItem type="n.14.text1">{unique_code}</TextItem>
            </View>
          </View>
          <Gap vertical={sp.sm} />
          <TextItem type="b.14.text1.u">waktu dibuat</TextItem>
          <TextItem type="n.14.text1">{dateFormater(created_at)}</TextItem>
        </View>
      </ScrollView>
    </Container>
  );
};

export default TransactionDetail;
