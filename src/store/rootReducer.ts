import { combineReducers } from "redux";

import { countriesReducer, IState as ICountriesState } from "./statisctics/reducers/reducer";

export interface IStore {
    countries: ICountriesState;
}

export const rootReducer = combineReducers({
    countries: countriesReducer,
})