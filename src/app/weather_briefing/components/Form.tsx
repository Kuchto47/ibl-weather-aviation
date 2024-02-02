import { PropsWithChildren, useState } from 'react';
import { useFetchWeatherData } from '../hooks/useFetchWeatherData';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingDataArray } from '../model/BriefingData';
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

interface Props {
    onBriefingReceived: (briefing: BriefingDataArray) => void;
}

export const Form = (props: PropsWithChildren<Props>) => {
    const [isFormSendable, setIsFormSendable] = useState(false);
    const fetchData = useFetchWeatherData();

    const getWeatherBriefing = async () => {
        const query: WeatherQuery = {
            reportTypes: ['METAR', 'TAF_LONGTAF'],
            countries: ['SQ'],
            stations: ['LKPR', 'EGLL']
        };
        props.onBriefingReceived(await fetchData(query));
    };

    const updateIsFormSendable = (sendable: boolean) => {
        setIsFormSendable(sendable);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '450px' }}>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <InputTable dispatchFormSendable={updateIsFormSendable} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                <Button
                                    variant="contained"
                                    onClick={getWeatherBriefing}
                                    disabled={!isFormSendable}
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
