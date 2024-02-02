import { BriefingSummary } from './BriefingSummary';
import { Form } from './Form';
import { Container, Grid } from '@mui/material';
import { ResponsiveDivider } from '../../common/components/ResponsiveDivider';

export const Briefing = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={5} sm={12}>
                    <Container>
                        <Form />
                    </Container>
                </Grid>
                <Grid item md={1} sm={12}>
                    <ResponsiveDivider />
                </Grid>
                <Grid item md={6} sm={12}>
                    <Container>
                        <BriefingSummary />
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};
