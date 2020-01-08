/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from "./src/screen/home/index";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"#4c4297"}/>
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
