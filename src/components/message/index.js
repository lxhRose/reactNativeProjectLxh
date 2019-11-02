/*
 * @description message
 * @author 吕兴海
 * @update 2019/11/02
 */
import React, { Component } from 'react';
import { Message } from "react-native-ui-lvxinghai";

export default class MyMessage extends Component {
  constructor(props) {
    super(props);
  }

  closeMessage = (id) => { // 关闭一个消息框就清理掉一个数据
    let _mesaageArr = this.props.mesaageArr;
    _mesaageArr.map((message, i) => {
      if (message.id === id) _mesaageArr.splice(i, 1);
    });
    this.props.resetMessageArr(_mesaageArr);
  }

  render() {
    const { mesaageArr } = this.props;

    return (
      mesaageArr.map((message) => (
        <Message
          key={message.id}
          type={message.type}
          title={message.title}
          content={message.content}
          option={message.option}
          closeCallback={() => this.closeMessage(message.id)}
        />
      ))
    )
  }
}

