import * as types from "./types";
import { combineReducers } from 'redux';
import home from '../pages/page1/reducer';
import loading from "../component/loading/reducer";
import message from "../component/message/reducer";

const appReducer = combineReducers({
  home,
  loading,
  message
});

const rootReducer = (state, action) => {
  if (action.type === types.REST_STATE) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
