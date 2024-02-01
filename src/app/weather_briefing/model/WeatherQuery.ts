import { OpmetRequestParamReportTypesEnum } from '../../../generated/sdk';

export interface WeatherQuery {
    reportTypes: OpmetRequestParamReportTypesEnum[];
    stations?: string[];
    countries?: string[];
}
