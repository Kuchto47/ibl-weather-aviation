import { Alert, AlertTitle } from '@mui/material';
import { PropsWithChildren, useCallback } from 'react';
import { UnloadingLinearProgress } from './UnloadingLinearProgress';

interface Props {
    show: boolean;
    handleClose: () => void;
}

export const CustomizedAlert = (props: PropsWithChildren<Props>) => {
    const handleClose = useCallback(() => {
        props.handleClose();
    }, [props.handleClose]);

    return props.show ? (
        <>
            <Alert variant="filled" severity="error" onClose={handleClose}>
                <AlertTitle>
                    <b>Error</b>
                </AlertTitle>
                Your request failed. Adjust the parameters and try again.
            </Alert>
            <UnloadingLinearProgress onTimeRanOut={handleClose} />
        </>
    ) : (
        <></>
    );
};
