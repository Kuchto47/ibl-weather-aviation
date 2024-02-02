import { OpmetRequestParamDTOReportTypesEnum } from '../../../generated/sdk';

export interface WeatherQuery {
    reportTypes: ReportTypes;
    stations?: string;
    countries?: string;
}

export type ReportTypes = {
    [key in OpmetRequestParamDTOReportTypesEnum]: boolean;
};
