import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    checkbox_margin: {
        marginRight: '-7px'
    },
    label_padding: {
        paddingRight: '15px'
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
                            className={styles.checkbox_margin}
                        />
                    }
                    label="METAR"
                    className={styles.label_padding}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={sigmetChecked}
                            onChange={toggleSigmet}
                            size="small"
                            className={styles.checkbox_margin}
                        />
                    }
                    label="SIGMET"
                    className={styles.label_padding}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={tafChecked}
                            onChange={toggleTaf}
                            size="small"
                            className={styles.checkbox_margin}
                        />
                    }
                    label="TAF"
                    className={styles.label_padding}
                />
            </FormGroup>
        </FormControl>
    );
};
