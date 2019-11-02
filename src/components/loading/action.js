/*
 * @description Loading
 * @author 吕兴海
 * @update 2019/11/02
 */
import * as types from "../../redux/types";

const toggleLoading = (visible) => {
  return {
    type: types.TOGGLE_LOADING,
    visible
  }
}

export {
  toggleLoading
}
