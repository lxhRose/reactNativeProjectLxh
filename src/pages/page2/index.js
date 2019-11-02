/*
 * @description template
 * @author 吕兴海
 * @update 2019/11/02
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button } from "react-native-ui-lvxinghai";

export default class Page2 extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text onPress={() => this.props.navigation.goBack()}>page2</Text>
        <Button style={{ marginTop: 10, width: 200 }}
          onPress={() => this.props.navigation.navigate('page1')}
          text="返回首页" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

