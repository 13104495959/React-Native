//  自定义GHButton组件(提供按钮文字修改,和点击事件)
import React, { Component } from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

class GHButton extends Component {
  render() {
    //  给自定义的按钮提供两个属性
    const { buttonText, onClick } = this.props;
    return (
    //  属性和控件绑定
      <TouchableOpacity onPress={onClick} style={styles.Button}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

//  自定义Button的样式
const styles = StyleSheet.create({
  Button: {
    width: 60,
    height: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default GHButton;
