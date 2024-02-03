import { Fragment, useContext } from 'react';
import { BriefingContext } from '../contexts/BriefingContext';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { BriefingDataDictionary } from '../model/BriefingData';
import { formatDate } from '../utils/formatDate';
import { convertMapToArray } from '../utils/converter';

export const BriefingSummary = () => {
    const { briefingData } = useContext(BriefingContext);

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: '440px' }}>
                    <Table sx={{ minWidth: '475px' }}>
                        <TableBody>{createTableRecords(briefingData.response)}</TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

const createTableRecords = (data: BriefingDataDictionary | undefined): JSX.Element => {
    if (!data) return <></>;
    const arrayifiedMap = convertMapToArray(data);
    return (
        <>
            {arrayifiedMap.map((obj, outerIndex) => {
                return (
                    <Fragment key={outerIndex}>
                        <TableRow key={outerIndex} sx={{backgroundColor: '#BEBEBE'}}>
                            <TableCell>{obj.key}</TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                        {obj.value.map((stationBriefingData, innerIndex) => {
                            return (
                                <TableRow key={`${outerIndex}_${innerIndex}`}>
                                    <TableCell>{stationBriefingData.queryType}</TableCell>
                                    <TableCell>
                                        {formatDate(stationBriefingData.reportTime)}
                                    </TableCell>
                                    <TableCell>{stationBriefingData.text}</TableCell>
                                </TableRow>
                            );
                        })}
                    </Fragment>
                );
            })}
        </>
    );
};
