import { PropsWithChildren } from 'react';
import { BriefingDataArray } from '../model/BriefingData';

interface Props {
    briefingData: BriefingDataArray;
}

export const BriefingSummary = (props: PropsWithChildren<Props>) => {
    return <p>{JSON.stringify(props.briefingData)}</p>;
};
