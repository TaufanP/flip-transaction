interface TransactionTileProps {
  sender: string;
  beneficiary: string;
  name: string;
  amount: number;
  date: string;
  iSsuccess: boolean;
  onPress(id: string): void;
  id: string;
}
