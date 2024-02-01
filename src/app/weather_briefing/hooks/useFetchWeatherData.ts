import { useCallback } from 'react';
import weatherBriefingService from '../services/weatherBriefingService';
import { WeatherQuery } from '../model/WeatherQuery';
import { mapResponseDtoToBriefingData } from '../services/mapperService';
import { BriefingDataArray } from '../model/BriefingData';

export const useFetchWeatherData = () => {
    return useCallback(async (query: WeatherQuery): Promise<BriefingDataArray> => {
        const result = await weatherBriefingService.getWeatherBriefing(query);
        return result ? mapResponseDtoToBriefingData(result) : [];
    }, []);
};
