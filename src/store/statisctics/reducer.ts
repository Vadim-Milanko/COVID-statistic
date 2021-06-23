import { createReducer } from '@reduxjs/toolkit';
import { ICountry } from '../../pages/Statistics/interfaces';
import { CountriesActionTypes as types } from './actionTypes';


export interface IState {
    countries: ICountry[];
    isLoading: boolean;
    error: string;
}

export const initialState: IState = {
    countries: [],
    isLoading: false,
    error: '',
}

export const countriesReducer = createReducer(initialState, {
    [types.FETCH_COUNTRIES_START]: (state, action) => {
        state.isLoading = true;
    },
    [types.FETCH_COUNTRIES_SUCCESS]: (state, action) => {
        state.isLoading = false;
        state.countries = action.payload.countries;
    },
    [types.FETCH_COUNTRIES_ERROR]: (state, action) => {
        state.isLoading = false;
        state.countries = [];
        state.error = action.error;
    },
});