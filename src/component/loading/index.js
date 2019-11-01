import React, { Component } from 'react';
import {
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BaseModal } from "react-native-ui-lvxinghai";
import adap from './../../utils/adaptation';

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  closeModal = () => {
    this.props.closeModal(false);
  }
  render() {
    const { visible } = this.props;
    return (
      <BaseModal
        style={{
          padding: 0,
          width: adap.w(1920),
          height: adap.h(1080)
        }}
        visible={visible}
        closeModal={this.closeModal}
        hideCloseBtn={true} >
        <View style={styles.content} >
          <ProgressBarAndroid color="#fff" />
          <Text style={styles.text}>加载中...</Text>
        </View>
      </BaseModal>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    width: adap.w(1920),
    height: adap.h(1080),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: adap.h(56),
    fontSize: adap.font(56),
    textAlign: 'center',
    color: "#fff",
  }
});

