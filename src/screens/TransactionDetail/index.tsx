import {
  CompositeNavigationProp,
  RouteProp,
  useRoute,
} from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ArrowTailed } from "../../../assets";
import { Button, Container, Gap, Header, TextItem } from "../../components";
import { colors, spacing as sp, strings } from "../../constants";
import { currencyFormat, widthPercent } from "../../helper";
import { dateFormater } from "../../helper/dateFormat";
import { StackParamsList } from "../../types/screens";
import styles from "./styles";

interface TransactionDetailProps {
  navigation: CompositeNavigationProp<any, any>;
}

const TransactionDetail = ({ navigation }: TransactionDetailProps) => {
  const route = useRoute<RouteProp<StackParamsList, "TRANSACTION_DETAIL">>();

  const [boxHeight, setBoxHeight] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const heightValue = useSharedValue(0);

  const {
    beneficiary_bank,
    sender_bank,
    id,
    beneficiary_name,
    account_number,
    amount,
    unique_code,
    remark,
    created_at,
  } = route.params;

  const backPress = () => navigation.goBack();

  const maskStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: heightValue.value }],
    height: boxHeight,
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setBoxHeight(height + 24);
    heightValue.value = withTiming(height + 24);
  };

  const toggle = () => setIsExpanded((current) => !current);

  useEffect(() => {
    heightValue.value = withTiming(isExpanded ? boxHeight : 0);
  }, [isExpanded]);

  return (
    <Container>
      <Header label={strings.detailTransaction} onPress={backPress} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={[styles.box, styles.container]}>
          <TextItem type="b.16.text1.u">{`ID TRANSAKSI: #${id}`}</TextItem>
        </View>
        <Gap vertical={sp.xxs} />
        <View style={[styles.box, styles.container, styles.space]}>
          <TextItem type="b.16.text1.u">{`${strings.paymentDetail} `}</TextItem>
          <Button onPress={toggle}>
            <TextItem type="n.14.primary1.c">
              {isExpanded ? strings.close : strings.open}
            </TextItem>
          </Button>
        </View>
        <Gap vertical={sp.xxs} />
        <View style={styles.box} onLayout={onLayout}>
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
              <TextItem type="b.14.text1.u">{strings.amount}</TextItem>
              <TextItem type="n.14.text1">Rp{currencyFormat(amount)}</TextItem>
            </View>
          </View>
          <Gap vertical={sp.sm} />
          <View style={styles.rowCenter}>
            <View style={styles.mainFlex}>
              <TextItem type="b.14.text1.u">{strings.paymentDesc}</TextItem>
              <TextItem type="n.14.text1">{remark}</TextItem>
            </View>
            <View style={styles.childFlex}>
              <TextItem type="b.14.text1.u">{strings.uniqueCode}</TextItem>
              <TextItem type="n.14.text1">{unique_code}</TextItem>
            </View>
          </View>
          <Gap vertical={sp.sm} />
          <TextItem type="b.14.text1.u">{strings.dateCreated}</TextItem>
          <TextItem type="n.14.text1">{dateFormater(created_at)}</TextItem>
          <Animated.View style={[maskStyle, styles.mask]} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default TransactionDetail;
