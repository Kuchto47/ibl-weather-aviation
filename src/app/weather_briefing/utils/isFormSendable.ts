import { BriefingContextData } from '../contexts/BriefingContext';
import { ReportTypes, WeatherQuery } from '../model/WeatherQuery';

export const isFormSendable = (briefingData: BriefingContextData): boolean => {
    return (
        atLeastOneCheckboxActive(briefingData.query.reportTypes) &&
        metarAirportOrCountryNonEmpty(briefingData.query) &&
        countriesNonEmpty(briefingData.query)
    );
};

const atLeastOneCheckboxActive = (reportTypes: ReportTypes): boolean => {
    return (
        [reportTypes.METAR, reportTypes.SIGMET, reportTypes.TAF_LONGTAF].filter((rt) => !!rt)
            .length > 0
    );
};

const metarAirportOrCountryNonEmpty = (query: WeatherQuery): boolean => {
    if (!query.reportTypes.METAR) return true;
    return metarMinimumRequirementsMet(query);
};

const countriesNonEmpty = (query: WeatherQuery): boolean => {
    if (!query.reportTypes.SIGMET && !query.reportTypes.TAF_LONGTAF) return true;
    return countriesLengthSufficient(query.countries);
};

const airportsLengthSufficient = (airports: string | undefined): boolean => {
    return !!(airports && airports.length >= 4); // TODO regex test
};

const airportsEmpty = (airports: string | undefined): boolean => {
    return !airports || airports.length === 0;
};

const countriesLengthSufficient = (countries: string | undefined): boolean => {
    return !!(countries && countries.length >= 2); // TODO regex test
};

const countriesEmpty = (countries: string | undefined): boolean => {
    return !countries || countries.length === 0;
};

const bothCountriesAndAirportsAreEmpty = (query: WeatherQuery) => {
    return countriesEmpty(query.countries) && airportsEmpty(query.stations);
};

const metarMinimumRequirementsMet = (query: WeatherQuery) => {
    return (
        !bothCountriesAndAirportsAreEmpty(query) &&
        (airportsLengthSufficient(query.stations) || airportsEmpty(query.stations)) &&
        (countriesLengthSufficient(query.countries) || countriesEmpty(query.countries))
    );
};

// TODO this could be done better, eg. airports and countries could be checked by zod for schema fulfillment and upon error make it unsendable...
