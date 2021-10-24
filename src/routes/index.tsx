import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { pages } from "../constants";
import { TransactionDetail, Transactions } from "../screens";

const Stack = createNativeStackNavigator();

const MainRoute = () => (
  <Stack.Navigator
    initialRouteName={pages.Transactions}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={pages.Transactions} component={Transactions} />
    <Stack.Screen
      name={pages.TransactionDetail}
      component={TransactionDetail}
    />
  </Stack.Navigator>
);

export default MainRoute;
