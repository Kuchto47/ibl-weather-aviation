import { createContext } from 'react';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingDataDictionary } from '../model/BriefingData';

export interface BriefingContextData {
    query: WeatherQuery;
    response?: BriefingDataDictionary;
}

interface BriefingContextBundle {
    briefingData: BriefingContextData;
    updateContext: (data: BriefingContextData) => void;
}

export const defaultBriefingData: BriefingContextData = {
    query: {
        reportTypes: {
            METAR: false,
            SIGMET: false,
            TAF_LONGTAF: false
        },
        countries: '',
        stations: ''
    }
};

export const BriefingContext = createContext<BriefingContextBundle>({
    briefingData: defaultBriefingData,
    updateContext: () => {}
});
