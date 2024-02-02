import { createContext } from 'react';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingData } from '../model/BriefingData';

interface BriefingContextData {
    query: WeatherQuery;
    response?: BriefingData;
}

interface BriefingContextBundle {
    data: BriefingContextData;
    updateContext: (data: BriefingContextData) => void;
}

export const defaultBriefingData: BriefingContextData = {
    query: {
        reportTypes: [],
        countries: [],
        stations: []
    }
};

export const BriefingContext = createContext<BriefingContextBundle>({
    data: defaultBriefingData,
    updateContext: () => {}
});
