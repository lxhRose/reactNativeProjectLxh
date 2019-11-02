/*
 * @description reduces统一出口
 * @author 吕兴海
 * @update 2019/11/02
 */
import * as types from "./types";
import { combineReducers } from 'redux';
import home from '../pages/page1/reducer';
import loading from "../components/loading/reducer";
import message from "../components/message/reducer";

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
