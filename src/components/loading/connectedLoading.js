/*
 * @description Loading
 * @author 吕兴海
 * @update 2019/11/02
 */
import { connect } from 'react-redux';
import Loading from "./index";
import {
  toggleLoading,
} from "./action";

const mapStateToProps = state => {

  const {
    visible,
  } = state.loading;

  return {
    visible: visible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: (visible) => {
      dispatch(toggleLoading(visible));
    }
  }
}

const ConnectedLoading = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);

export default ConnectedLoading;
