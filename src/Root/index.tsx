import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { pages } from "../constants";
import { Transactions } from "../screens";

const Stack = createNativeStackNavigator();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={pages.Transactions}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={pages.Transactions} component={Transactions} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
