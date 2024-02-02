import Container from '@mui/material/Container';
import { createUseStyles } from 'react-jss';
import { Briefing } from '../../weather_briefing/components/Briefing';
import { useScreenSize } from '../hooks/useScreenSize';

const useStyles = createUseStyles({
    container: {
        marginTop: '84px',
        height: 'calc(100vh - 84px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '550px'
    },
    smallScreenContainer: {
        justifyContent: 'flex-start'
    }
});

export const Content = () => {
    const styles = useStyles();
    const isSmallScreen = useScreenSize();

    return (
        <Container
            maxWidth="xl"
            className={`${styles.container} ${isSmallScreen ? styles.smallScreenContainer : ''}`}
        >
            <Briefing />
        </Container>
    );
};
