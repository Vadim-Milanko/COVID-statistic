import { put, call, takeEvery } from 'redux-saga/effects';

import api from '../../api/Api';
import { fetchCountriesError, fetchCountriesStart, fetchCountriesSuccess, IFetchCountries } from './actions/actionCreators';
import { CountriesActionTypes as types } from './actions/actionTypes';

export function* watchFetchCountries(): Generator {
    yield takeEvery(types.FETCH_COUNTRIES, fetchCountriesSaga);
}

export function* fetchCountriesSaga(action: IFetchCountries): Generator {
    const { url } = action.payload;

    try {
        yield put(fetchCountriesStart());
        const data: any = yield call(() => {
            return api.fetchStatisticsByCountries(url);
        });
        yield put(fetchCountriesSuccess(data.results))
    } catch (error) {
        yield put(fetchCountriesError(error))
    }
}