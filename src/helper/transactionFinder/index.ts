import { defaultValue as dv } from "../../constants";

const sortTransactions = ({
  data,
  sortBy,
}: {
  data: TransactionsDataProps[];
  sortBy: string;
}) => {
  const { none, nameAsc, nameDsc, newest, oldest } = dv.sortType;

  if (sortBy === none) {
    return data;
  }
  switch (sortBy) {
    case nameAsc:
      return data.sort((a: TransactionsDataProps, b: TransactionsDataProps) => {
        const prevName = a.beneficiary_name?.toLocaleLowerCase();
        const nextName = b.beneficiary_name?.toLocaleLowerCase();
        return prevName < nextName ? -1 : 1;
      });
    case nameDsc:
      return data.sort((a: TransactionsDataProps, b: TransactionsDataProps) => {
        const prevName = a.beneficiary_name?.toLocaleLowerCase();
        const nextName = b.beneficiary_name?.toLocaleLowerCase();
        return prevName < nextName ? 1 : -1;
      });
    case newest:
      return data.sort((a: TransactionsDataProps, b: TransactionsDataProps) => {
        const prevTime = timestampConverter(a);
        const nextTime = timestampConverter(b);
        return prevTime < nextTime ? 1 : -1;
      });
    case oldest:
      return data.sort((a: TransactionsDataProps, b: TransactionsDataProps) => {
        const prevTime = timestampConverter(a);
        const nextTime = timestampConverter(b);
        return prevTime < nextTime ? -1 : 1;
      });
    default:
      return data;
  }
};

const searchTransactions = ({
  data,
  keyword,
}: {
  data: TransactionsDataProps[];
  keyword: string;
}) => {
  if (keyword.length === 0) {
    return data;
  }
  const key = keyword.toLocaleLowerCase();
  const tempData = data.filter((item) => {
    const nameCheck = item?.beneficiary_name?.toLocaleLowerCase().includes(key);
    const senderCheck = item?.sender_bank?.toLocaleLowerCase().includes(key);
    const beneficiaryCheck = item?.beneficiary_bank
      ?.toLocaleLowerCase()
      .includes(key);
    const amountCheck = item?.amount
      ?.toString()
      .toLocaleLowerCase()
      .includes(key);
    return nameCheck || senderCheck || beneficiaryCheck || amountCheck;
  });
  return tempData;
};

const timestampConverter = (transaction: TransactionsDataProps) =>
  new Date(
    transaction.status === dv.transactionStatus.SUCCESS
      ? transaction.completed_at
      : transaction.created_at
  ).getTime();

export { searchTransactions, sortTransactions };
