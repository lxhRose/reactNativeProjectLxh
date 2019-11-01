import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Button } from "react-native-ui-lvxinghai";
import adap from "./../../utils/adaptation";

export default class Page1 extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text>{this.props.testData}</Text>
              <Button style={{ marginTop: adap.h(10), width: adap.w(200) }}
                onPress={() => this.props.navigation.navigate('page2')}
                text="page2" />
              <Button style={{ marginTop: adap.h(10), width: adap.w(200) }}
                onPress={() => {
                  Utils.Loading.show();
                  setTimeout(() => {
                    Utils.Loading.hide();
                  }, 2000);
                }}
                text="Loading" />
              <Button style={{ marginTop: adap.h(10), width: adap.w(200) }}
                onPress={() => Utils.Massage.info({ title: '消息头', content: `消息体` })}
                text="Massage" />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

