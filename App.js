/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native';

import HomeScreen from "./src/screen/home/index";
import FlashMessage from "react-native-flash-message/src/FlashMessage";

const App: () => React$Node = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light" backgroundColor={"#4c4297"}/>
            <FlashMessage
                position="bottom"
                duration={30000}
            />
            <HomeScreen/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App;
