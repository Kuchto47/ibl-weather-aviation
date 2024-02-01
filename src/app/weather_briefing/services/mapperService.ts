import { OpmetRequestDTO, OpmetResponseDTO } from '../../../generated/sdk';
import { BriefingDataArray } from '../model/BriefingData';
import { WeatherQuery } from '../model/WeatherQuery';
import { v4 } from 'uuid';

export const mapWeatherQueryToRequestDto = (query: WeatherQuery): OpmetRequestDTO => {
    const uniqueId = v4();
    return {
        id: uniqueId,
        method: 'query',
        params: [
            {
                id: uniqueId,
                ...query
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
