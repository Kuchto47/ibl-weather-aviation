import Container from '@mui/material/Container';
import { createUseStyles } from 'react-jss';
import { Briefing } from '../../weather_briefing/components/Briefing';

const useStyles = createUseStyles({
    container: {
        marginTop: '84px',
        height: 'calc(100vh - 84px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '550px'
    }
});

export const Content = () => {
    const styles = useStyles();

    return (
        <Container maxWidth="xl" className={styles.container}>
            <Briefing />
        </Container>
    );
};
