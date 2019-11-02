/*
 * @description App入口
 * @author 吕兴海
 * @update 2019/11/02
 */
import React, { Component } from 'react';
import connectedPage1 from './src/pages/page1/connectedPage1';
import Page2 from './src/pages/page2/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./src/redux/index";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  ConnectedLoading,
  ConnectedMessage,
} from "./src/component/index";
import Utils from "./src/utils/index";

const loggerMiddleware = createLogger();
let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

// 提升为全局变量
window.store = store;
window.Utils = Utils;

//路由
const Rooter = createSwitchNavigator(
  {
    page1: connectedPage1,
    page2: Page2,
  },
  {
    initialRouteName: "page1"
  }
);

const AppContainer = createAppContainer(Rooter);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        <ConnectedLoading />
        <ConnectedMessage />
      </Provider>
    );
  }
}
