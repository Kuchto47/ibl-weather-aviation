import { OpmetResponseResultQueryTypeEnum } from '../../../generated/sdk';

export interface BriefingData {
    queryType: OpmetResponseResultQueryTypeEnum;
    reportTime: Date;
    stationId: string;
    text: string;
    placeId?: string;
    receptionTime?: Date;
    refs?: string[];
    reportType?: string;
    revision?: string;
    textHTML?: string;
}
