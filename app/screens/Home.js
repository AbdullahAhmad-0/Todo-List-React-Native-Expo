import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ navigation, GlobalState }) => {
    const {
        toDoList,
        setToDoList,
        task,
        setTask,
        chosenTask,
        setChosenTask,
    } = GlobalState;

    useEffect(() => {
        setToDoList(prevState => [...prevState, { id: prevState.length + 1, task: "task name 2" }]);
    }, []);

    const handleSaveTask = () => {
        const index = toDoList.length+1;
        setToDoList(prevState => [...prevState, { id: index, task: task }]);
        setTask("");
    };

    const handleChooseTask = (item) => {
        setChosenTask(item);
        navigation.navigate("ChosenTask");
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>

            </View>
            <Footer navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    body: {
        flex: 8,
        width:'100%',
        fontWeight: "bold",
        marginBottom: 20,
    },
    header: {
        flex: 1,
        width:'100%',
    },
    footer: {
        flex: 1,
        width:'100%',
    }
});

export default Home;
