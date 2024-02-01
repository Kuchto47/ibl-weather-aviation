import { PropsWithChildren } from 'react';
import { useFetchWeatherData } from '../hooks/useFetchWeatherData';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingDataArray } from '../model/BriefingData';

interface Props {
    onBriefingReceived: (briefing: BriefingDataArray) => void;
}

export const Form = (props: PropsWithChildren<Props>) => {
    const fetchData = useFetchWeatherData();

    const getWeatherBriefing = async () => {
        const query: WeatherQuery = {
            reportTypes: ['METAR', 'TAF_LONGTAF'],
            countries: ['SQ'],
            stations: ['LKPR', 'EGLL']
        };
        props.onBriefingReceived(await fetchData(query));
    };

    return <button onClick={getWeatherBriefing}>Get weather demo</button>;
};
