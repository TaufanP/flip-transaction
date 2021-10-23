import React, { useRef } from "react";
import { View, TextInput, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Arrow, Search } from "../../../assets";
import {
  Button,
  Container,
  FlyPopUp,
  Gap,
  SemiRadio,
  TextItem,
  TransactionTile,
} from "../../components";
import { colors, spacing as sp } from "../../constants";
import { dummyFilter } from "./dummy";
import styles from "./styles";

const HORIZONTAL_GAP = sp.xs;

const Transactions = () => {
  const popRef = useRef<any>();
  return (
    <Container>
      <Gap vertical={sp.xs} />
      <Gap horizontal={HORIZONTAL_GAP * 2}>
        <View style={styles.searchBox}>
          <View style={styles.searchIcon}>
            <Search fill={colors.text2} width={20} height={20} />
          </View>
          <TextInput
            style={{ height: 48, flex: 1 }}
            placeholder="Cari nama, bank, atau nominal"
          />
          <Gap horizontal={sp.sm} />
          <Button
            style={styles.filterButton}
            onPress={() => popRef.current?.open()}
          >
            <TextItem type="b.14.primary1.u">urutkan</TextItem>
            <Gap horizontal={sp.xs} />
            <Arrow fill={colors.primary1} width={16} height={16} />
          </Button>
          <Gap horizontal={sp.sm} />
        </View>
      </Gap>
      <Gap vertical={sp.xs} />
      <ScrollView contentContainerStyle={{ marginHorizontal: HORIZONTAL_GAP }}>
        <TransactionTile />
      </ScrollView>
      <FlyPopUp ref={popRef}>
        {dummyFilter.map((item) => (
          <SemiRadio key={`${item.id}`} label={item.label} />
        ))}
      </FlyPopUp>
    </Container>
  );
};

export default Transactions;
