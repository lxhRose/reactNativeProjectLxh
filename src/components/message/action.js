/*
 * @description message
 * @author 吕兴海
 * @update 2019/11/02
 */
import * as types from "../../redux/types";

const resetMessageArr = (mesaageArr) => {
  return {
    type: types.RESET_MESSAGE,
    mesaageArr
  }
}

export {
  resetMessageArr
}
