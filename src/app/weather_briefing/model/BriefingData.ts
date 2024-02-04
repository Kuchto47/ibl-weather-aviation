import { OpmetResponseResultDTOQueryTypeEnum } from '../../../generated/sdk';

export type BriefingDataDictionary = Map<string, StationBriefingData[]>;

export type StationBriefingData = {
    queryType: OpmetResponseResultDTOQueryTypeEnum;
    reportTime: Date;
    text: string;
};
