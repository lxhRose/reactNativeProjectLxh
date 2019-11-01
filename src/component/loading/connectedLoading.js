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
