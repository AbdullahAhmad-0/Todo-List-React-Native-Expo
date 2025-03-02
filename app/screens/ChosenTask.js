import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";
import Footer from "../components/Footer";

const ChosenTask = ({ navigation, GlobalState }) => {
    const { chosenTask } = GlobalState;

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.body}>
                <Text>{chosenTask}</Text>
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
        width: "100%",
        backgroundColor: "#14141405",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ChosenTask;
