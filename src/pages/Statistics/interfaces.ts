import { RouteComponentProps } from 'react-router';
import { Location, Search } from 'history';

export interface IProps extends RouteComponentProps<Location<Search>>, IMapStateToProps, IMapDispatchToProps { }

export interface ICountry {
    ID: string;
    Country: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface IMapStateToProps {
    characters: ICountry[];
    isLoading: boolean;
    error: string;
}

export interface IMapDispatchToProps {
    fetchCountries: (url: string) => void;
}