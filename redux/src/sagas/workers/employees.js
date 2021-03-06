import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../../actions/employees';

const api = () => (
  axios({
    url: 'http://dummy.restapiexample.com/api/v1/employees',
    method: 'GET',
  })
);

function* employeesDataWorker() {
  try {
    const response = yield call(api);
    const results = response.data;

    yield put(actions.employeesSuccess(results));
  } catch (error) {
    yield put(actions.employeesError(error));
  }
}

export { api, employeesDataWorker };
