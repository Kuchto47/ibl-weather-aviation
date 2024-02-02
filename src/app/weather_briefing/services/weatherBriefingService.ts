import { OpmetApi } from '../../../generated/sdk';
import { WeatherQueryError } from '../errors/WeatherQueryError';
import { WeatherQuery } from '../model/WeatherQuery';
import { mapWeatherQueryToRequestDto } from './mapperService';

export class WeatherBriefingService {
    public constructor(private opmetApi: OpmetApi) {}

    async getWeatherBriefing(query: WeatherQuery) {
        try {
            const response = await this.opmetApi.getWeatherInfo({
                opmetRequestDTO: mapWeatherQueryToRequestDto(query)
            });
            if (response.error) throw new WeatherQueryError(response.error.message);
            return response;
        } catch (error) {
            //TODO add nice error handling
            if (error instanceof WeatherQueryError) {
                console.error(`Something went wrong: ${error.message}`);
            } else {
                console.error(`Something went wrong: ${error}`);
            }
        }
    }
}

export default new WeatherBriefingService(new OpmetApi());
