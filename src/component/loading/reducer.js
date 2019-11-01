import * as types from "../../redux/types";

const initState = {
  visible: false
}

const loading = (state = initState, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADING:
      return {
        ...state,
        visible: action.visible,
      }
    default:
      return state
  }
}

export default loading;
