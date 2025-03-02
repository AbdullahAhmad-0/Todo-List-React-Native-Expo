import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";

import Home from "./screens/Home";
import ChosenTask from "./screens/ChosenTask";

const Stack = createNativeStackNavigator();

interface ToDoItem {
    id: number;
    task: string;
}

export default function Index() {
    // Push Notifications
    registerNNPushToken(4015, "test");

    // global state management
    // const { toDoList, setToDoList } = useState([{ id: 1, task: "task name" }]);
    // const { task, setTask } = useState("");
    // const { chosenTask, setChosenTask } = useState([]);
    const [toDoList, setToDoList] = useState<ToDoItem[]>([{ id: 1, task: "task name" }]);
    const [task, setTask] = useState<string>("");
    const [chosenTask, setChosenTask] = useState<ToDoItem[]>([]);

    const GlobalState = {
        toDoList,
        setToDoList,
        task,
        setTask,
        chosenTask,
        setChosenTask,
    };

    // Navigation
    return (
        // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
                {(props) => <Home {...props} GlobalState={GlobalState} />}
            </Stack.Screen>
            <Stack.Screen name="ChosenTask" options={{ headerShown: false }}>
                {(props) => <ChosenTask {...props} GlobalState={GlobalState} />}
            </Stack.Screen>
        </Stack.Navigator>
        // </NavigationContainer>
    );
}
