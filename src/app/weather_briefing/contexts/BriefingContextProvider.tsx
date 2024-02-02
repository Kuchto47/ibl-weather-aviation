import { PropsWithChildren, useState } from 'react';
import { BriefingContext, defaultBriefingData } from './BriefingContext';

export const BriefingContextProvider = (props: PropsWithChildren) => {
    const [briefingData, setBriefingData] = useState(defaultBriefingData);

    return (
        <BriefingContext.Provider value={{ briefingData, updateContext: setBriefingData }}>
            {props.children}
        </BriefingContext.Provider>
    );
};
