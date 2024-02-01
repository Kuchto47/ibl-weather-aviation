import { useState } from 'react';
import { BriefingSummary } from './BriefingSummary';
import { Form } from './Form';
import { BriefingDataArray } from '../model/BriefingData';
import { Container, Grid } from '@mui/material';

export const Briefing = () => {
    const [briefingData, setBriefingData] = useState<BriefingDataArray>([]);

    const onBriefingDataReceive = (data: BriefingDataArray) => {
        setBriefingData(data);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <Container>
                        <Form onBriefingReceived={onBriefingDataReceive} />
                    </Container>
                </Grid>
                <Grid item md={6} sm={12}>
                    <Container>
                        <BriefingSummary briefingData={briefingData} />
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};
