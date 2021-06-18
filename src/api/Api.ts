import axios, { AxiosResponse } from 'axios';
import { FETCH_URLS } from '../pages/Statistics/constants';

import { ICountry } from '../pages/Statistics/interfaces';
import { BASE_URL } from './constants';

export interface IFetchStatisticsResponse {
    Countries: ICountry[]
} 

export interface IApi {
    fetchStatisticsByCountries(): Promise<any>;
}

const request = axios.create({
    baseURL: BASE_URL,
});

class Api implements IApi {

    async fetchStatisticsByCountries(): Promise<any> {
        let response;

        try {
            response = await request.get(FETCH_URLS.summary);
        } catch (error) {
            console.log(error);
        }

        console.log(response);
        
        return response;
    }
}

const api = new Api();

export default api;