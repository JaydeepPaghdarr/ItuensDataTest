import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./App/Store/store";
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './App/Screen/home'
import HomeDetail from './App/Screen/homeDetail'

console.disableYellowBox = true;

const Stack = createStackNavigator({
  Home: { screen: Home },
  HomeDetail: { screen: HomeDetail },
},{
  // headerMode: 'none',
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
          <AppContainer />
      </Provider>
    );
  }

}

