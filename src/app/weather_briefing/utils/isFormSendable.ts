import { BriefingContextData } from '../contexts/BriefingContext';

export const isFormSendable = (briefingData: BriefingContextData) => {
    return (
        [
            briefingData.query.reportTypes.METAR,
            briefingData.query.reportTypes.SIGMET,
            briefingData.query.reportTypes.TAF_LONGTAF
        ].filter((rt) => !!rt).length > 0
    );
};
