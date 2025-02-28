import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import NewScreen from "./screens/NewScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        // <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Stack.Screen name="NewScreen" options={{ headerShown: false }} component={NewScreen} />
            </Stack.Navigator>
        // </NavigationContainer>
    );
}
