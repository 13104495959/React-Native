import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//  引入redux的头文件
import { createStore, applyMiddleware, compose } from 'redux';
//  引入react-redux的头文件
import { Provider } from 'react-redux';
//  引入redux-thunk的头文件
import thunk from 'redux-thunk';
//  引入reducer的集合头文件
import CombineReducers from '../../reducers/CombineReducers';
//  创建store(已使用中间件react-thunk)
//  注意CombineReducers此文件不能为空集合
const store = createStore(CombineReducers, {}, compose(
  // 在store中注册中间件thunk
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
export default class MainScreen extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
      <View>
        <Text>
          我是reactNative的测试文件
        </Text>
      </View>
      </Provider>
    );
  }
}
