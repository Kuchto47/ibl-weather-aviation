import {
    OpmetRequestDTO,
    OpmetRequestParamDTOReportTypesEnum,
    OpmetResponseDTO
} from '../../../generated/sdk';
import { BriefingDataArray } from '../model/BriefingData';
import { ReportTypes, WeatherQuery } from '../model/WeatherQuery';
import { v4 } from 'uuid';

export const mapWeatherQueryToRequestDto = (query: WeatherQuery): OpmetRequestDTO => {
    const uniqueId = v4();
    return {
        id: uniqueId,
        method: 'query',
        params: [
            {
                id: uniqueId,
                countries: query.countries,
                stations: query.stations,
                reportTypes: mapReportTypes(query.reportTypes)
            }
        ]
    };
};

export const mapResponseDtoToBriefingData = (response: OpmetResponseDTO): BriefingDataArray => {
    return response.result
        ? response.result.map((singleResult) => ({
              ...singleResult
          }))
        : [];
};

const mapReportTypes = (reportTypes: ReportTypes): OpmetRequestParamDTOReportTypesEnum[] => {
    const reportTypesDto: OpmetRequestParamDTOReportTypesEnum[] = [];
    // TODO: this is horrible hardcode, refactor...
    if (reportTypes.METAR) reportTypesDto.push('METAR');
    if (reportTypes.SIGMET) reportTypesDto.push('SIGMET');
    if (reportTypes.TAF_LONGTAF) reportTypesDto.push('TAF_LONGTAF');

    return reportTypesDto;
};
