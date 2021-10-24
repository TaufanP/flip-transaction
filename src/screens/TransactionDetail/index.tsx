import {
  CompositeNavigationProp,
  RouteProp,
  useRoute,
} from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Arrow, ArrowTailed } from "../../../assets";
import { Button, Container, Gap, Header, TextItem } from "../../components";
import { colors, pages, spacing as sp } from "../../constants";
import { StackParamsList } from "../../types/screens";

interface TransactionDetailProps {
  navigation: CompositeNavigationProp<any, any>;
}

const TransactionDetail = ({ navigation }: TransactionDetailProps) => {
  const route = useRoute<RouteProp<StackParamsList, "TRANSACTION_DETAIL">>();
  const id = route.params?.id;
  return (
    <Container>
      <Header label={"Detail"} onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: sp.xs,
          paddingBottom: sp.l,
        }}
      >
        <View
          style={{
            paddingVertical: sp.sm,
            paddingHorizontal: sp.m,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.white,
          }}
        >
          <TextItem type="b.16.text1.u">{`ID TRANSAKSI: #${id}`}</TextItem>
        </View>
        <Gap vertical={sp.xxs} />
        <View
          style={{
            paddingVertical: sp.sm,
            paddingHorizontal: sp.m,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.white,
            justifyContent: "space-between",
          }}
        >
          <TextItem type="b.16.text1.u">detail transaksi </TextItem>
          <Button>
            <TextItem type="n.14.primary1.c">tutup</TextItem>
          </Button>
        </View>
        <Gap vertical={sp.xxs} />
        <View
          style={{
            paddingVertical: sp.sm,
            paddingHorizontal: sp.m,
            backgroundColor: colors.white,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextItem type={"b.16.text1.u"}>bni</TextItem>
            <ArrowTailed
              fill={colors.text1}
              width={12}
              height={12}
              style={{ transform: [{ rotate: "180deg" }] }}
            />
            <TextItem type={"b.16.text1.u"}>bri</TextItem>
          </View>

          <Gap vertical={sp.sm} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1.75 }}>
              <TextItem type="b.14.text1.u">syif salsabila</TextItem>
              <TextItem type="n.14.text1">0412313209</TextItem>
            </View>
            <View style={{ flex: 1 }}>
              <TextItem type="b.14.text1.u">nominal</TextItem>
              <TextItem type="n.14.text1">Rp10.028</TextItem>
            </View>
          </View>
          <Gap vertical={sp.sm} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1.75 }}>
              <TextItem type="b.14.text1.u">berita transfer</TextItem>
              <TextItem type="n.14.text1">coba mbanking yey</TextItem>
            </View>
            <View style={{ flex: 1 }}>
              <TextItem type="b.14.text1.u">kode unik</TextItem>
              <TextItem type="n.14.text1">50</TextItem>
            </View>
          </View>
          <Gap vertical={sp.sm} />
          <TextItem type="b.14.text1.u">waktu dibuat</TextItem>
          <TextItem type="n.14.text1">8 April 2021</TextItem>
        </View>
      </ScrollView>
    </Container>
  );
};

export default TransactionDetail;
