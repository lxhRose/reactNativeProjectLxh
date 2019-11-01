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
