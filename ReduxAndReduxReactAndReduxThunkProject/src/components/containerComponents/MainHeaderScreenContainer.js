//  ⑥实现子UI组件,只实现UI
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GHButton from '../../general/GHButton';

class MainHeaderScreenContainer extends Component {
  render() {
    const { leftButtonClick, rightButtonClick } = this.props;
    return (
      <View>
        <GHButton buttonText="加➕加" onPress={leftButtonClick} />
        <Text> textInComponent </Text>
        <GHButton buttonText="减➖减" onPress={rightButtonClick} />
      </View>
    );
  }
}

export default MainHeaderScreenContainer;
