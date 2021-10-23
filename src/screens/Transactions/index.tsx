import React from "react";
import { View, TextInput, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Arrow, Search } from "../../../assets";
import {
  Button,
  Container,
  Gap,
  TextItem,
  TransactionTile,
} from "../../components";
import { colors, spacing as sp } from "../../constants";
import styles from "./styles";

const HORIZONTAL_GAP = sp.xs;

const Transactions = () => {
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
          <Button style={styles.filterButton}>
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
    </Container>
  );
};

export default Transactions;
