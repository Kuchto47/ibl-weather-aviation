import { useCallback } from 'react';
import weatherBriefingService from '../services/weatherBriefingService';
import { WeatherQuery } from '../model/WeatherQuery';
import { mapResponseDtoToBriefingDataDict } from '../services/mapperService';
import { BriefingDataDictionary } from '../model/BriefingData';

export const useFetchWeatherData = () => {
    return useCallback(async (query: WeatherQuery): Promise<BriefingDataDictionary> => {
        const result = await weatherBriefingService.getWeatherBriefing(query);
        return mapResponseDtoToBriefingDataDict(result);
    }, []);
};
