import Container from '@mui/material/Container';
import { createUseStyles } from 'react-jss';
import { Form } from '../../weather_briefing/components/Form';
import { BriefingSummary } from '../../weather_briefing/components/BriefingSummary';

const useStyles = createUseStyles({
    container: {
        marginTop: '84px'
    }
});

export const Content = () => {
    const styles = useStyles();

    return (
        <Container maxWidth="xl" className={styles.container}>
            <Form />
            <BriefingSummary />
        </Container>
    );
};
