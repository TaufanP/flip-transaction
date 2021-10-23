import React, { useEffect, useMemo, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
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
import { FlyPopUpRef } from "../../components/molecule/FlyPopUp/types";
import {
  colors,
  defaultValue as dv,
  spacing as sp,
  strings,
} from "../../constants";
import { sortTransactions, searchTransactions } from "../../helper";
import { fetchTransactions } from "../../service";
import { dummySorts } from "./dummy";
import styles from "./styles";

const HORIZONTAL_GAP = sp.xs;

const Transactions = () => {
  const popRef = useRef<FlyPopUpRef>();
  const isMounted = useRef<boolean>();

  const [keyword, setKeyword] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<SortProps>(
    dummySorts.find((item) => item.id === dv.sortType.none) || dummySorts[0]
  );
  const [transactionsData, setTransactionsData] = useState<
    TransactionsDataProps[]
  >([]);

  const finalTransactions = useMemo(() => {
    if (keyword?.length === 0 && selectedSort?.id === dv.sortType.none) {
      return transactionsData;
    }
    const searchedData = searchTransactions({
      data: [...transactionsData],
      keyword,
    });
    const sortedData = sortTransactions({
      data: searchedData,
      sortBy: selectedSort.id,
    });
    return sortedData;
  }, [keyword, selectedSort, transactionsData]);

  const sortPress = (sort: SortProps) => {
    setSelectedSort(sort);
    popRef.current?.close();
  };

  const getTransactions = async () => {
    try {
      const { data } = await fetchTransactions();
      if (!isMounted.current) {
        return;
      }
      setTransactionsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const keyExtractor = ({ id }: TransactionsDataProps) => `${id}`;

  const renderItem = ({ item }: { item: TransactionsDataProps }) => (
    <View>
      <TransactionTile
        amount={item?.amount}
        beneficiary={item?.beneficiary_bank}
        name={item?.beneficiary_name}
        sender={item?.sender_bank}
        iSsuccess={item?.status === dv.transactionStatus.SUCCESS}
        date={
          item?.status === dv.transactionStatus.SUCCESS
            ? item?.completed_at
            : item?.created_at
        }
      />
      <Gap vertical={sp.xs} />
    </View>
  );

  useEffect(() => {
    isMounted.current = true;
    getTransactions();

    () => {
      isMounted.current = false;
    };
  }, []);

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
            placeholder={strings.findBy}
            onChangeText={setKeyword}
          />
          <Gap horizontal={sp.sm} />
          <Button
            style={styles.sortButton}
            onPress={() => popRef.current?.open()}
          >
            <TextItem type="b.14.primary1">{selectedSort?.label}</TextItem>
            <Gap horizontal={sp.xs} />
            <Arrow fill={colors.primary1} width={16} height={16} />
          </Button>
          <Gap horizontal={sp.sm} />
        </View>
      </Gap>
      <Gap vertical={sp.xs} />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={finalTransactions}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <FlyPopUp ref={popRef}>
        {dummySorts.map((item) => (
          <SemiRadio
            key={`${item.id}`}
            item={item}
            isSelected={item.id === selectedSort?.id}
            onPress={sortPress}
          />
        ))}
      </FlyPopUp>
    </Container>
  );
};

export default Transactions;
