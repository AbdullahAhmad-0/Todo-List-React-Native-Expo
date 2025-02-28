import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NewScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Screen</Text>
            <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
            <Text style={styles.title}>Something New Here</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default NewScreen;
