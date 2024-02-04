import { useCallback } from 'react';
import weatherBriefingService from '../services/weatherBriefingService';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingDataDictionary } from '../model/BriefingData';

export const useFetchWeatherData = () => {
    return useCallback(async (query: WeatherQuery): Promise<BriefingDataDictionary | undefined> => {
        return await weatherBriefingService.getWeatherBriefing(query);
    }, []);
};
