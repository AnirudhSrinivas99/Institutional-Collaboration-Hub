import React from "react";
import { View, Text, ActivityIndicator, StyleSheet,Image } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                   <Image
                    source={require("../assets/gi.gif")}
                    style={{ marginTop: -116, marginLeft: -50 }}
                ></Image>
                <Text>INSTITUTIONAL COLLABORATION HUB IS LOADING</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

