/*
 * @description 统一提升为全局变量
 * @author 吕兴海
 * @update 2019/11/02
 */
import LoadImg from "./loadImg";
import Massage from "./message";
import Loading from "./loading";
import Axios from "./axios";
import DateFormat from "./dateFormat";
import _AsyncStorage from "./asyncStorage";

export default Utils = {
  Axios,
  Loading,
  Massage,
  DateFormat,
  LoadImg,
  AsyncStorage: _AsyncStorage
}
