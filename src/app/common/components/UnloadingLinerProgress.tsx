import { LinearProgress } from '@mui/material';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

interface Props {
    time?: number;
    step?: number;
    onTimeRanOut: () => void;
}

const useStyles = createUseStyles({
    progressBar: {
        marginBottom: '10px'
    }
});

export const UnloadingLinearProgress = (props: PropsWithChildren<Props>) => {
    const getOriginalTime = () => props.time ?? 10000;
    const getStep = () => props.step ?? 100;

    const [timeLeft, setTimeLeft] = useState(getOriginalTime());
    const styles = useStyles();

    const calculateProgressBar = useCallback(() => {
        const originalTime = getOriginalTime();
        const onePerCent = originalTime / 100;
        return timeLeft / onePerCent;
    }, [timeLeft, getOriginalTime]);

    useEffect(() => {
        if (timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((previousTimeLeft) => {
                    const newTimeLeft = previousTimeLeft - getStep();
                    return newTimeLeft >= 0 ? newTimeLeft : 0;
                });
            }, getStep());
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            props.onTimeRanOut();
        }
    }, [timeLeft, props.onTimeRanOut]);

    return (
        <LinearProgress
            variant="determinate"
            value={calculateProgressBar()}
            className={styles.progressBar}
        />
    );
};
