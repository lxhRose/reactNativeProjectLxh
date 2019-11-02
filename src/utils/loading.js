/*
 * @description 加载时图标
 * @author 吕兴海
 * @update 2019/11/02
 */
import { toggleLoading } from "../components/loading/action";

const Loading = {
  show: function () {
    store.dispatch(toggleLoading(true));
  },
  hide: function () {
    store.dispatch(toggleLoading(false));
  }
}

export default Loading;
