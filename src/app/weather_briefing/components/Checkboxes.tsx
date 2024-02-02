import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    checkbox: {
        marginRight: '-7px'
    }
});

export const Checkboxes = () => {
    const [metarChecked, setMetarChecked] = useState(false);
    const [sigmetChecked, setSigmetChecked] = useState(false);
    const [tafChecked, setTafChecked] = useState(false);

    const styles = useStyles();

    const toggleMetar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetarChecked(event.target.checked);
    };

    const toggleSigmet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSigmetChecked(event.target.checked);
    };

    const toggleTaf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTafChecked(event.target.checked);
    };

    const isErroredCheckboxes =
        [metarChecked, sigmetChecked, tafChecked].filter((rt) => !!rt).length === 0;

    return (
        <FormControl required error={isErroredCheckboxes} variant="standard" component="fieldset">
            <FormGroup row={true}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={metarChecked}
                            onChange={toggleMetar}
                            size="small"
                            className={styles.checkbox}
                        />
                    }
                    label="METAR"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={sigmetChecked}
                            onChange={toggleSigmet}
                            size="small"
                            className={styles.checkbox}
                        />
                    }
                    label="SIGMET"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={tafChecked}
                            onChange={toggleTaf}
                            size="small"
                            className={styles.checkbox}
                        />
                    }
                    label="TAF"
                />
            </FormGroup>
        </FormControl>
    );
};
