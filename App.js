import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PrayerStatusScreen from "./src/screens/PrayerStatusScreen";
import PrayerTimingScreen from "./src/screens/PrayerTimingScreen";
import ReportsScreen from "./src/screens/ReportsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Status">
        <Stack.Screen
          name="Status"
          component={PrayerStatusScreen}
          options={{ title: "Prayer Status" }}
        />

        <Stack.Screen
          name="Timings"
          component={PrayerTimingScreen}
          options={{ title: "Prayer Timings" }}
        />

        <Stack.Screen
          name="Reports"
          component={ReportsScreen}
          options={{ title: "Prayers Report" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
