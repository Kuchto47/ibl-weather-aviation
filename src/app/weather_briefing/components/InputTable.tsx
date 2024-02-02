import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Checkboxes } from './Checkboxes';
import { TextInputField } from './TextInputField';
import { PropsWithChildren } from 'react';

interface Props {
    dispatchFormSendable: (sendable: boolean) => void;
}

export const InputTable = (props: PropsWithChildren<Props>) => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Table sx={{ minWidth: '445px' }}>
                <TableBody>
                    <TableRow>
                        <TableCell>Message Types:</TableCell>
                        <TableCell>
                            <Checkboxes dispatchFormSendable={props.dispatchFormSendable} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Airports:</TableCell>
                        <TableCell>
                            <TextInputField label="Airports" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Countries:</TableCell>
                        <TableCell>
                            <TextInputField label="Countries" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
