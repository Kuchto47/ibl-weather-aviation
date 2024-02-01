import { OpmetRequestParamDTOReportTypesEnum } from '../../../generated/sdk';

export interface WeatherQuery {
    reportTypes: OpmetRequestParamDTOReportTypesEnum[];
    stations?: string[];
    countries?: string[];
}
