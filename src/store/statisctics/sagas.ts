import { put, call, takeEvery } from 'redux-saga/effects';

import api from '../../api/Api';
import { fetchCountriesError, fetchCountriesStart, fetchCountriesSuccess, IFetchCountries } from './actionCreators';
import { CountriesActionTypes as types } from './actionTypes';

export function* watchFetchCountries(): Generator {
    yield takeEvery(types.FETCH_COUNTRIES, fetchCountriesSaga);
}

export function* fetchCountriesSaga(action: IFetchCountries): Generator {

    try {
        yield put(fetchCountriesStart());
        
        const data: any = yield call(() => {
            return api.fetchStatisticsByCountries();
        });
        
        yield put(fetchCountriesSuccess(data.data.Countries));
    } catch (error) {
        yield put(fetchCountriesError(error));
    }
}