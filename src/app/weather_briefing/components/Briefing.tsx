import { useState } from 'react';
import { BriefingSummary } from './BriefingSummary';
import { Form } from './Form';
import { BriefingDataArray } from '../model/BriefingData';

export const Briefing = () => {
    const [briefingData, setBriefingData] = useState<BriefingDataArray>([]);

    const onBriefingDataReceive = (data: BriefingDataArray) => {
        setBriefingData(data);
    };

    return (
        <>
            <Form onBriefingReceived={onBriefingDataReceive} />
            <BriefingSummary briefingData={briefingData} />
        </>
    );
};
