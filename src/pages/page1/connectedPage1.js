/*
 * @description template
 * @author 吕兴海
 * @update 2019/11/02
 */
import { connect } from 'react-redux';
import Page1 from "./index";
import {
  loadAllPatientInfo,
} from './action';

const mapStateToProps = state => {
  const {
    testData,
  } = state.home;

  return {
    testData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllPatientInfo() {
      dispatch(loadAllPatientInfo())
    },
  }
}

const connectedPage1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1)


export default connectedPage1;
