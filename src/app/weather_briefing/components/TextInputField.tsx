import { FormControl, TextField } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
    label: 'Airports' | 'Countries';
}

export const TextInputField = (props: PropsWithChildren<Props>) => {
    return (
        <FormControl fullWidth>
            <TextField label={props.label} variant="filled"/>
        </FormControl>
    );
};
