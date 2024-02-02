import { useContext } from 'react';
import { BriefingContext } from '../contexts/BriefingContext';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { BriefingData } from '../model/BriefingData';
import { formatDate } from '../utils/formatDate';

export const BriefingSummary = () => {
    const { briefingData } = useContext(BriefingContext);

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: '440px' }}>
                    <Table sx={{ minWidth: '475px' }}>
                        <TableBody>
                            {briefingData.response ? (
                                briefingData.response.map(createTableRecord)
                            ) : (
                                <></>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

const createTableRecord = (data: BriefingData, index: number) => {
    return (
        <>
            <TableRow key={`${index}1`}>
                <TableCell>{data.stationId}</TableCell>
                <TableCell />
                <TableCell />
            </TableRow>
            <TableRow key={`${index}2`}>
                <TableCell>{data.queryType}</TableCell>
                <TableCell>{formatDate(data.reportTime)}</TableCell>
                <TableCell>{data.text}</TableCell>
            </TableRow>
        </>
    );
};
