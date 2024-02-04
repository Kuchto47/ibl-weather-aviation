import { BriefingContextData } from '../contexts/BriefingContext';
import { ReportTypes, WeatherQuery } from '../model/WeatherQuery';

export const isFormSendable = (briefingData: BriefingContextData): boolean => {
    return (
        atLeastOneCheckboxActive(briefingData.query.reportTypes) &&
        tafAndMetarAirportsNonEmpty(briefingData.query) &&
        sigmetCountriesNonEmpty(briefingData.query)
    );
};

// TODO this could be done better, eg. airports and countries could be checked by zod for schema fulfillment and upon error make it unsendable...

const atLeastOneCheckboxActive = (reportTypes: ReportTypes): boolean => {
    return (
        [reportTypes.METAR, reportTypes.SIGMET, reportTypes.TAF_LONGTAF].filter((rt) => !!rt)
            .length > 0
    );
};

const tafAndMetarAirportsNonEmpty = (query: WeatherQuery): boolean => {
    if (!query.reportTypes.METAR && !query.reportTypes.TAF_LONGTAF) return true;
    return airportsLengthSufficient(query.stations);
};

const sigmetCountriesNonEmpty = (query: WeatherQuery): boolean => {
    if (!query.reportTypes.SIGMET) return true;
    return countriesLengthSufficient(query.countries);
};

const airportsLengthSufficient = (airports: string | undefined): boolean => {
    return !!(airports && airports.length >= 4); // TODO regex test could be better than this, but still uglier than eg. zod schema
};

const countriesLengthSufficient = (countries: string | undefined): boolean => {
    return !!(countries && countries.length >= 2); // TODO regex test could be better than this, but still uglier than eg. zod schema
};
