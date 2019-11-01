import * as types from "../../redux/types";

const initState = {
  mesaageArr: []
}

const message = (state = initState, action) => {
  switch (action.type) {
    case types.RESET_MESSAGE:
      return {
        ...state,
        mesaageArr: action.mesaageArr,
      }
    default:
      return state
  }
}

export default message;
