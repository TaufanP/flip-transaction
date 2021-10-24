import {
  CompositeNavigationProp,
  RouteProp,
  useRoute,
} from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import { Arrow } from "../../../assets";
import { Button, Container, Gap, TextItem } from "../../components";
import { colors, pages, spacing as sp } from "../../constants";
import { StackParamsList } from "../../types/screens";

interface TransactionDetailProps {
  navigation: CompositeNavigationProp<any, any>;
}

const TransactionDetail = () => {
  // const route = useRoute<RouteProp<StackParamsList, "TRANSACTION_DETAIL">>();
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}></View>
    // <Container>
    //   <View
    //     style={{
    //       height: 48,
    //       width: "100%",
    //       backgroundColor: colors.white,
    //       elevation: 2,
    //       flexDirection: "row",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Button
    //       style={{
    //         justifyContent: "center",
    //         alignItems: "center",
    //         width: 48,
    //         height: 48,
    //       }}
    //       // onPress={() => navigation.navigate(pages.Transactions)}
    //     >
    //       <Arrow
    //         fill={colors.text1}
    //         width={16}
    //         height={16}
    //         style={{ transform: [{ rotate: "90deg" }] }}
    //       />
    //     </Button>
    //     <Gap horizontal={sp.xs} />
    //     <TextItem type="b.16.text1">Detail</TextItem>
    //   </View>
    // </Container>
  );
};

export default TransactionDetail;
