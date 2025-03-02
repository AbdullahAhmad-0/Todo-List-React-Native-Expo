import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import Icon from 'react-native-vector-icons/AntDesign';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>My Todo List</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    footer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2.62,
        elevation: 12,
        zIndex: 5,
        borderTopWidth:1,
        borderTopColor:'#14141410'
    },
    text: {
        fontSize: 18,
        fontWeight: "900",
    },
});

export default Footer;
