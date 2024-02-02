import { FormControl, TextField } from '@mui/material';
import { ChangeEvent, PropsWithChildren, useContext, useState } from 'react';
import { BriefingContext } from '../contexts/BriefingContext';

interface Props {
    label: 'Airports' | 'Countries';
}

export const TextInputField = (props: PropsWithChildren<Props>) => {
    const { briefingData, updateContext } = useContext(BriefingContext);
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        updateContext({
            ...briefingData,
            query: {
                ...briefingData.query,
                ...(props.label === 'Airports'
                    ? { stations: event.currentTarget.value }
                    : { countries: event.currentTarget.value })
            }
        });
    };

    return (
        <FormControl fullWidth>
            <TextField label={props.label} variant="filled" value={value} onChange={handleChange} />
        </FormControl>
    );
};
