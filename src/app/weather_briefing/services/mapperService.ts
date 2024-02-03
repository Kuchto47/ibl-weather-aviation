import {
    OpmetRequestDTO,
    OpmetRequestParamDTOReportTypesEnum,
    OpmetResponseDTO,
    OpmetResponseResultDTO
} from '../../../generated/sdk';
import { BriefingDataDictionary, StationBriefingData } from '../model/BriefingData';
import { ReportTypes, WeatherQuery } from '../model/WeatherQuery';
import { v4 } from 'uuid';
import { splitTextOnSpaces } from '../utils/splitTextOnWhitespaces';

export const mapWeatherQueryToRequestDto = (query: WeatherQuery): OpmetRequestDTO => {
    const uniqueId = v4();
    return {
        id: uniqueId,
        method: 'query',
        params: [
            {
                id: uniqueId,
                countries: splitTextOnSpaces(query.countries),
                stations: splitTextOnSpaces(query.stations),
                reportTypes: mapReportTypes(query.reportTypes)
            }
        ]
    };
};

export const mapResponseDtoToBriefingDataDict = (
    response: OpmetResponseDTO | undefined
): BriefingDataDictionary => {
    const dict: BriefingDataDictionary = new Map<string, StationBriefingData[]>();
    if (response && response.result) {
        response.result.forEach((result) => {
            const data = generateStationBriefingData(result);
            if (dict.has(result.stationId)) {
                const record = dict.get(result.stationId)!;
                dict.set(result.stationId, [...record, data]);
            } else {
                dict.set(result.stationId, [data]);
            }
        });
    }
    return dict;
};

const mapReportTypes = (reportTypes: ReportTypes): OpmetRequestParamDTOReportTypesEnum[] => {
    const reportTypesDto: OpmetRequestParamDTOReportTypesEnum[] = [];
    // TODO: this is horrible hardcode, refactor...
    if (reportTypes.METAR) reportTypesDto.push('METAR');
    if (reportTypes.SIGMET) reportTypesDto.push('SIGMET');
    if (reportTypes.TAF_LONGTAF) reportTypesDto.push('TAF_LONGTAF');

    return reportTypesDto;
};

const generateStationBriefingData = (data: OpmetResponseResultDTO): StationBriefingData => {
    return {
        queryType: data.queryType,
        reportTime: data.reportTime,
        text: data.text,
        textHTML: data.textHTML
    };
};
