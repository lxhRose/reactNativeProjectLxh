import { toggleLoading } from "../component/loading/action";

const Loading = {
  show: function () {
    store.dispatch(toggleLoading(true));
  },
  hide: function () {
    store.dispatch(toggleLoading(false));
  }
}

export default Loading;
