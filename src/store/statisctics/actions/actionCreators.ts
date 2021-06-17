import { createAction } from '@reduxjs/toolkit';

import { ICountry } from '../../../pages/Statistics/interfaces';
import { CountriesActionTypes as types } from './actionTypes';

export interface IFetchPayload {
    url: string;
}

export interface ISuccessPayload {
    countries: ICountry[];
}

export interface IFetchCountries {
    type: types.FETCH_COUNTRIES;
    payload: IFetchPayload;
}

export interface IFetchCountriesStart {
    type: types.FETCH_COUNTRIES_START;
}

export interface IFetchCountriesSuccess {
    type: types.FETCH_COUNTRIES_SUCCESS;
    payload: ISuccessPayload;
}

export interface IFetchCountriesError {
    type: types.FETCH_COUNTRIES_ERROR;
    error: string;
}

export const fetchCountries = createAction(types.FETCH_COUNTRIES, function prepare(url: string) {
    return {
        payload: {
            url,
        }
    }
});

export const fetchCountriesStart = createAction(types.FETCH_COUNTRIES_START);
export const fetchCountriesSuccess = createAction(types.FETCH_COUNTRIES_SUCCESS, function prepare(countries: ICountry[]) {
    return {
        payload: {
            countries,
        }
    }
});

export const fetchCountriesError = createAction<string>(types.FETCH_COUNTRIES_ERROR);

export type TCountriesActions = IFetchCountries | IFetchCountriesStart | IFetchCountriesSuccess | IFetchCountriesError;