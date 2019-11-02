/*
 * @description template
 * @author 吕兴海
 * @update 2019/11/02
 */
import * as types from '../../redux/types';

// 获取所有患者信息
const loadAllPatientInfo = () => {
  return dispatch => {
    Utils.Axios.request('get', { url: '/patientInfo' }, (res) => {
      dispatch({
        type: types.LOAD_ALL_PATIENT_INFO,
        data: res.body.list
      });
    });
  }
}

export {
  loadAllPatientInfo,
}
