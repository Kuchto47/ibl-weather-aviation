import { BriefingContextData } from '../contexts/BriefingContext';
import { ReportTypes, WeatherQuery } from '../model/WeatherQuery';

export const isFormSendable = (briefingData: BriefingContextData): boolean => {
    return (
        atLeastOneCheckboxActive(briefingData.query.reportTypes) &&
        metarAirportNonEmpty(briefingData.query) &&
        countriesNonEmpty(briefingData.query)
    );
};

const atLeastOneCheckboxActive = (reportTypes: ReportTypes): boolean => {
    return (
        [reportTypes.METAR, reportTypes.SIGMET, reportTypes.TAF_LONGTAF].filter((rt) => !!rt)
            .length > 0
    );
};

const metarAirportNonEmpty = (query: WeatherQuery): boolean => {
    if (!query.reportTypes.METAR) return true;
    return query.stations ? query.stations.length >= 4 : false;
};

const countriesNonEmpty = (query: WeatherQuery): boolean => {
    if (!query.reportTypes.SIGMET && !query.reportTypes.TAF_LONGTAF) return true;
    return query.countries ? query.countries.length >= 2 : false;
};

// TODO this could be done better, eg. airports and countries could be checked by yup or zod for schema fulfillment and upon error make it unsendable...
