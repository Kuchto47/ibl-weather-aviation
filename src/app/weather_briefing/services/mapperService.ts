import {
    OpmetRequestDTO,
    OpmetRequestParamDTO,
    OpmetRequestParamDTOReportTypesEnum,
    OpmetResponseDTO,
    OpmetResponseResultDTO
} from '../../../generated/sdk';
import { BriefingDataDictionary, StationBriefingData } from '../model/BriefingData';
import { ReportTypes, WeatherQuery } from '../model/WeatherQuery';
import { v4 } from 'uuid';
import { splitTextOnSpaces } from '../utils/splitTextOnWhitespaces';

const METAR = 'METAR',
    SIGMET = 'SIGMET',
    TAF_LONGTAF = 'TAF_LONGTAF';

export const mapWeatherQueryToRequestDto = (query: WeatherQuery): OpmetRequestDTO => {
    const sigmetRequest = mapSigmetRequest(query);
    const metarAndTafAirportsRequest = mapMetarAndTafRequest(query);

    const params: OpmetRequestParamDTO[] = [];

    if (sigmetRequest) params.push(sigmetRequest);
    if (metarAndTafAirportsRequest) params.push(metarAndTafAirportsRequest);

    return {
        id: v4(),
        method: 'query',
        params
    };
};

export const mapResponseDtoToBriefingDataDict = (
    response: OpmetResponseDTO
): BriefingDataDictionary => {
    const dict: BriefingDataDictionary = new Map<string, StationBriefingData[]>();
    const transformResult = (result: OpmetResponseResultDTO) => {
        const data = generateStationBriefingData(result);
        if (dict.has(result.stationId)) {
            const record = dict.get(result.stationId)!;
            dict.set(result.stationId, [...record, data]);
        } else {
            dict.set(result.stationId, [data]);
        }
    };
    response.result?.forEach(transformResult);
    return dict;
};

const mapNonSigmetReportTypes = (
    reportTypes: ReportTypes
): OpmetRequestParamDTOReportTypesEnum[] => {
    const reportTypesDto: OpmetRequestParamDTOReportTypesEnum[] = [];
    // TODO: this is horrible hardcode, refactor...
    if (reportTypes.METAR) reportTypesDto.push(METAR);
    if (reportTypes.TAF_LONGTAF) reportTypesDto.push(TAF_LONGTAF);

    return reportTypesDto;
};

const generateStationBriefingData = (data: OpmetResponseResultDTO): StationBriefingData => {
    return {
        queryType: data.queryType,
        reportTime: data.reportTime,
        text: data.text
    };
};

const mapSigmetRequest = (query: WeatherQuery): OpmetRequestParamDTO | undefined => {
    if (!query.reportTypes.SIGMET) return undefined;
    return {
        id: v4(),
        reportTypes: [SIGMET],
        countries: splitTextOnSpaces(query.countries)
    };
};

const mapMetarAndTafRequest = (query: WeatherQuery): OpmetRequestParamDTO | undefined => {
    if (!query.reportTypes.METAR && !query.reportTypes.TAF_LONGTAF) return undefined;
    return {
        id: v4(),
        reportTypes: mapNonSigmetReportTypes(query.reportTypes),
        stations: splitTextOnSpaces(query.stations)
    };
};
