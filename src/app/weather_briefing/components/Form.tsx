import { PropsWithChildren, useState } from 'react';
import { useFetchWeatherData } from '../hooks/useFetchWeatherData';
import { WeatherQuery } from '../model/WeatherQuery';
import { BriefingDataArray } from '../model/BriefingData';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Checkboxes } from './Checkboxes';

type ReportType = 0 | 1 | 2;

interface Props {
    onBriefingReceived: (briefing: BriefingDataArray) => void;
}

export const Form = (props: PropsWithChildren<Props>) => {
    const fetchData = useFetchWeatherData();

    const getWeatherBriefing = async () => {
        const query: WeatherQuery = {
            reportTypes: ['METAR', 'TAF_LONGTAF'],
            countries: ['SQ'],
            stations: ['LKPR', 'EGLL']
        };
        props.onBriefingReceived(await fetchData(query));
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: '445px'}}>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Message Types:
                            </TableCell>
                            <TableCell>
                                <Checkboxes />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={getWeatherBriefing}>Get weather demo</button>
        </>
    );
};
