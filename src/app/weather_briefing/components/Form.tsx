import { PropsWithChildren, useState } from 'react';
import { useFetchWeatherData } from '../hooks/useFetchWeatherData';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingDataArray } from '../model/BriefingData';
import { OpmetRequestParamDTOReportTypesEnum } from '../../../generated/sdk/models';

type ReportType = 0 | 1 | 2;

interface Props {
    onBriefingReceived: (briefing: BriefingDataArray) => void;
}

interface FormData {
    reportTypes: OpmetRequestParamDTOReportTypesEnum[];
    airports: string;
    countries: string;
}

export const Form = (props: PropsWithChildren<Props>) => {
    const [formData, setFormData] = useState<FormData>({
        reportTypes: [],
        airports: '',
        countries: ''
    });
    
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
