import { Fragment, PropsWithChildren, useContext } from 'react';
import { BriefingContext } from '../contexts/BriefingContext';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    useTheme
} from '@mui/material';
import { BriefingDataDictionary } from '../model/BriefingData';
import { formatDate } from '../utils/formatDate';
import { convertMapToArray } from '../../common/utils/converter';
import { BriefingMessageDecorator } from '../utils/decorateBriefingMessage';

export const BriefingSummary = () => {
    const { briefingData } = useContext(BriefingContext);

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: '440px' }}>
                    <Table sx={{ minWidth: '475px' }}>
                        <TableBody>
                            <TableRows data={briefingData.response} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

interface TableRowsProps {
    data: BriefingDataDictionary | undefined;
}

const TableRows = (props: PropsWithChildren<TableRowsProps>) => {
    const theme = useTheme();

    return props.data ? (
        <>
            {convertMapToArray(props.data).map((obj, outerIndex) => {
                return (
                    <Fragment key={outerIndex}>
                        <TableRow
                            key={outerIndex}
                            sx={{ backgroundColor: theme.palette.secondary[theme.palette.mode] }}
                        >
                            <TableCell>
                                <b>{obj.key}</b>
                            </TableCell>
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
                                    <TableCell>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: new BriefingMessageDecorator(
                                                    stationBriefingData.text,
                                                    theme.palette
                                                ).decorate()
                                            }}
                                        ></div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </Fragment>
                );
            })}
        </>
    ) : (
        <></>
    );
};
