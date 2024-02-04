import { useCallback, useContext, useEffect, useState } from 'react';
import { useFetchWeatherData } from '../hooks/useFetchWeatherData';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from '@mui/material';
import { InputTable } from './InputTable';
import { BriefingContext } from '../contexts/BriefingContext';
import { isFormSendable } from '../utils/isFormSendable';
import { CustomizedAlert } from '../../common/components/CustomizedAlert';

export const Form = () => {
    const [formSendable, setFormSendable] = useState(false);
    const [erroredRequest, setErroredRequest] = useState(false);
    const { briefingData, updateContext } = useContext(BriefingContext);
    const fetchData = useFetchWeatherData();

    const getWeatherBriefing = useCallback(async () => {
        const response = await fetchData(briefingData.query);
        if (!response) {
            setErroredRequest(true);
        }
        updateContext({
            ...briefingData,
            response
        });
    }, [briefingData.query, fetchData]);

    const handleCloseErrorMessage = useCallback(() => {
        setErroredRequest(false);
    }, [setErroredRequest]);

    useEffect(() => {
        const currentFormIsSendable = isFormSendable(briefingData);
        const previousFormIsSendable = formSendable;

        if (currentFormIsSendable !== previousFormIsSendable) {
            setFormSendable(currentFormIsSendable);
        }
    }, [briefingData]);

    return (
        <>
            <CustomizedAlert show={erroredRequest} handleClose={handleCloseErrorMessage} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '475px' }}>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <InputTable />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                <Button
                                    variant="contained"
                                    onClick={getWeatherBriefing}
                                    disabled={!formSendable}
                                >
                                    Create Briefing
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
