import { fork } from 'redux-saga/effects';

import { watchFetchCountries } from './statisctics/sagas';

function* rootSaga() {
    yield fork(watchFetchCountries);
}

export default rootSaga;