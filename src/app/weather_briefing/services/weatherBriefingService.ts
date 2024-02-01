import { OpmetApi } from "../../../generated/sdk";
import { WeatherQuery } from "../model/WeatherQuery";

export class WeatherBriefingService {
    public constructor(
        private opmetApi: OpmetApi
    ) {}

    async getWeatherBriefing(options: WeatherQuery) {
        // TODO
    }
}

export default new WeatherBriefingService(
    new OpmetApi()
);