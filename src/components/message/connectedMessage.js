/*
 * @description message
 * @author 吕兴海
 * @update 2019/11/02
 */
import { connect } from 'react-redux';
import MyMessage from "./index";
import { resetMessageArr } from "./action";

const mapStateToProps = state => {
  return {
    mesaageArr: state.message.mesaageArr
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetMessageArr: (mesaageArr) => {
      dispatch(resetMessageArr(mesaageArr));
    }
  }
}

const ConnectedMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMessage);


export default ConnectedMessage;
