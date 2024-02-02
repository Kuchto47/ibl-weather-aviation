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
import { Checkboxes } from './Checkboxes';
import { TextInputField } from './TextInputField';

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
                <Table sx={{ minWidth: '450px' }}>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <InputTable />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                <Button variant="contained" onClick={getWeatherBriefing}>
                                    Get weather demo
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

const InputTable = () => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Table sx={{ minWidth: '445px' }}>
                <TableBody>
                    <TableRow>
                        <TableCell>Message Types:</TableCell>
                        <TableCell>
                            <Checkboxes />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Airports:</TableCell>
                        <TableCell>
                            <TextInputField label='Airports'/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Countries:</TableCell>
                        <TableCell>
                            <TextInputField label='Countries'/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
