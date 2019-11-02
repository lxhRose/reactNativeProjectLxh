/*
 * @description 提示框
 * @author 吕兴海
 * @update 2019/11/02
 */
import { resetMessageArr } from "../component/message/action";

const Massage = {
  info: function (message) {
    let messageToArr = [{
      id: this.getId(),
      type: 'info',
      ...message
    }];
    this.comme(messageToArr);
  },
  success: function (message) {
    let messageToArr = [{
      id: this.getId(),
      type: 'success',
      ...message
    }];
    this.comme(messageToArr);
  },
  error: function (message) {
    let messageToArr = [{
      id: this.getId(),
      type: 'error',
      ...message
    }];
    this.comme(messageToArr);
  },
  warning: function (message) {
    let messageToArr = [{
      id: this.getId(),
      type: 'warning',
      ...message
    }];
    this.comme(messageToArr);
  },
  comme: function (messageToArr) {
    let Arr = [];
    if (store.getState().message.mesaageArr.length < 1) {
      Arr = [...messageToArr, ...store.getState().message.mesaageArr];
      store.dispatch(resetMessageArr(Arr));
    }
  },
  getId: function () {
    return new Date().getTime();
  }
}

export default Massage;
