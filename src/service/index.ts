import axios from "axios";

const fetchTransactions = () => {
  return new Promise<FetchResponse>(async (resolved, rejected) => {
    try {
      const { data }: { data: Object } = await axios.get(
        `https://nextar.flip.id/frontend-test`
      );
      const transactions = Object.values(data);
      resolved({
        data: transactions,
        isSuccess: true,
        error: null,
      });
    } catch (error) {
      rejected({
        data: null,
        isSuccess: false,
        error,
      });
    }
  });
};

const fetchTransaction = (id: string) => {
  return new Promise<FetchResponse>(async (resolved, rejected) => {
    try {
      const { data }: { data: Object } = await axios.get(
        `https://nextar.flip.id/frontend-test`
      );
      const transactions = Object.values(data);
      const transaction = transactions.find((item) => item?.id === id);
      console.log({ transactions });
      resolved({
        data: transaction,
        isSuccess: true,
        error: null,
      });
    } catch (error) {
      rejected({
        data: null,
        isSuccess: false,
        error,
      });
    }
  });
};

export { fetchTransactions, fetchTransaction };
