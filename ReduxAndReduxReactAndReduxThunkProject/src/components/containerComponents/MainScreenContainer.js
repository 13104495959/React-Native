//  ②实现程序的入口文件,此文件是容器组件
import React, { Component } from 'react';
import {} from 'react-native';
//  ③引入redux,react-redux,redux-thunk头文件文件,引入reducer的集合头文件CombineReducers,引入主UI的头文件
//  引入redux的头文件
import { createStore, applyMiddleware, compose } from 'redux';
//  引入react-redux的头文件
import { Provider } from 'react-redux';
//  引入redux-thunk的头文件
import thunk from 'redux-thunk';
//  引入reducer的集合头文件
import CombineReducers from '../../reducers/CombineReducers';
//  引入MainHeaderScreenContainer
import MainHeaderScreenContainer from '../containerComponents/MainHeaderScreenContainer';

//  ④创建store,一个程序中store只能有一个
//  创建store(已使用中间件react-thunk)
//  注意CombineReducers此文件不能为空集合
const store = createStore(CombineReducers, {}, compose(
  // 在store中注册中间件thunk
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//  ⑤使用Provider标签包裹主UI组件
export default class MainScreenContainer extends Component {
  render() {
    return (
      //  使用Provider(并给store属性赋值)标签包裹应该返回的组件
      <Provider store={store}><MainHeaderScreenContainer /></Provider>
    );
  }
}
