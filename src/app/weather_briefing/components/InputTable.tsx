import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    useTheme
} from '@mui/material';
import { Checkboxes } from './Checkboxes';
import { TextInputField } from './TextInputField';

export const InputTable = () => {
    const theme = useTheme();

    return (
        <TableContainer
            component={Paper}
            sx={{ backgroundColor: theme.palette.secondary[theme.palette.mode] }}
        >
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
