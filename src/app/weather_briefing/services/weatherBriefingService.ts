import { OpmetApi } from '../../../generated/sdk';
import { WeatherQuery } from '../model/WeatherQuery';
import { mapWeatherQueryToRequestDto } from './mapperService';

export class WeatherBriefingService {
    public constructor(private opmetApi: OpmetApi) {}

    async getWeatherBriefing(query: WeatherQuery) {
        try {
            // TODO if error is non-null then do something...
            return await this.opmetApi.getWeatherInfo({
                opmetRequestDTO: mapWeatherQueryToRequestDto(query)
            });
        } catch (e) {
            console.error('TODO error handling. Something went wrong:', e);
        }
    }
}

export default new WeatherBriefingService(new OpmetApi());
