import { CompositeNavigationProp } from "@react-navigation/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
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
  layout,
  pages,
  spacing as sp,
  strings,
} from "../../constants";
import { searchTransactions, sortTransactions } from "../../helper";
import { fetchTransactions } from "../../service";
import { dummySorts } from "./dummy";
import styles from "./styles";

interface TransactionsProps {
  navigation: CompositeNavigationProp<any, any>;
}

const HORIZONTAL_GAP = sp.xs;

const Transactions = ({ navigation }: TransactionsProps) => {
  const popRef = useRef<FlyPopUpRef>();
  const isMounted = useRef<boolean>();

  const [errorMsg, setErrorMsg] = useState<string>(strings.dataNotAvailable);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  const getTransactions = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data } = await fetchTransactions();
      if (!isMounted.current) {
        return;
      }
      setTransactionsData(data);
    } catch (error) {
      setIsError(true);
      //@ts-ignore
      setErrorMsg(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const keyExtractor = ({ id }: TransactionsDataProps) => `${id}`;

  const ListEmptyComponent = (
    <View style={styles.empty}>
      <TextItem type="b.16.text1.c">{strings.dataNotFound}</TextItem>
      <TextItem type="n.14.text1">{strings.anotherKey}</TextItem>
    </View>
  );

  const onTransactionPress = (id: string) => {
    const transaction = transactionsData.find((item) => item?.id === id);
    navigation.navigate(pages.TransactionDetail, { ...transaction });
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: TransactionsDataProps;
    index: number;
  }) => (
    <View>
      <TransactionTile
        onPress={onTransactionPress}
        id={item?.id}
        amount={item?.amount}
        beneficiary={item?.beneficiary_bank}
        name={item?.beneficiary_name}
        sender={item?.sender_bank}
        iSsuccess={item?.status === dv.transactionStatus.SUCCESS}
        date={item?.created_at}
        index={index}
      />
      <Gap vertical={sp.xs} />
    </View>
  );

  const showSort = () => popRef.current?.open();

  const sortPress = (sort: SortProps) => {
    setSelectedSort(sort);
    popRef.current?.close();
  };

  useEffect(() => {
    isMounted.current = true;
    getTransactions();

    () => {
      isMounted.current = false;
    };
  }, []);

  if (isError) {
    return (
      <Container>
        <View style={styles.empty}>
          <TextItem type="b.16.text1.c">{strings.wentWrong}</TextItem>
          <TextItem type="n.14.text1">{errorMsg}</TextItem>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <Gap vertical={sp.xs} />
      <SkeletonContent
        containerStyle={styles.flex}
        isLoading={isLoading}
        layout={layout.transactions}
      >
        <Gap horizontal={HORIZONTAL_GAP * 2}>
          <View style={styles.searchBox}>
            <View style={styles.searchIcon}>
              <Search fill={colors.text2} width={20} height={20} />
            </View>
            <TextInput
              style={styles.input}
              placeholder={strings.findBy}
              onChangeText={setKeyword}
            />
            <Gap horizontal={sp.sm} />
            <Button style={styles.sortButton} onPress={showSort}>
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
          ListEmptyComponent={ListEmptyComponent}
        />
      </SkeletonContent>
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
