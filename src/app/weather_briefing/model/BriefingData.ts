import { OpmetResponseResultDTOQueryTypeEnum } from '../../../generated/sdk';

export interface BriefingData {
    queryType: OpmetResponseResultDTOQueryTypeEnum;
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

export type BriefingDataArray = BriefingData[];
