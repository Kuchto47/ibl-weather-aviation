import { useContext } from 'react';
import { BriefingContext } from '../contexts/BriefingContext';

export const BriefingSummary = () => {
    const { briefingData } = useContext(BriefingContext);

    return <p>{briefingData.response ? JSON.stringify(briefingData.response) : '[]'}</p>;
};
