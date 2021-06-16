import axios from 'axios';

import { ICountries } from '../pages/Statistics/interfaces';
import { BASE_URL } from './constants';

export interface IApi {
    fetchStatisticsByCountries(url: string): Promise<ICountries>;
}

const request = axios.create({
    baseURL: BASE_URL,
})

class Api implements IApi {

    async fetchStatisticsByCountries(url: string): Promise<any> {
        let response;

        try {
            response = await request.get(url);
        } catch (error) {
            console.log(error);
        }

        return response;
    }
}

const api = new Api();

export default api;