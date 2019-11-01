import * as types from '../../redux/types';

const initState = {
  testData: 'Test Redux'
}

const home = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_ALL_PATIENT_INFO:
      return {
        ...state,
        testData: action.testData
      }
    default:
      return state
  }
}

export default home;
