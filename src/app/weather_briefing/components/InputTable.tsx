import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Checkboxes } from './Checkboxes';
import { TextInputField } from './TextInputField';

export const InputTable = () => {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <Table sx={{ minWidth: '470px' }}>
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
