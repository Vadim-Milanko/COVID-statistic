export interface ICountry {
    Country: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface ICountries {
    result: ICountry[];
}