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
