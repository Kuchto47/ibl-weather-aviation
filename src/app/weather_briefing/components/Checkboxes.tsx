import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { BriefingContext } from '../contexts/BriefingContext';
import { isFormSendable } from '../utils/isFormSendable';

const useStyles = createUseStyles({
    checkbox_margin: {
        marginRight: '-7px'
    },
    label_padding: {
        paddingRight: '15px'
    }
});

export const Checkboxes = () => {
    const { briefingData, updateContext } = useContext(BriefingContext);

    const styles = useStyles();

    const toggleMetar = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateContext({
            ...briefingData,
            query: {
                ...briefingData.query,
                reportTypes: {
                    ...briefingData.query.reportTypes,
                    METAR: event.target.checked
                }
            }
        });
    };

    const toggleSigmet = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateContext({
            ...briefingData,
            query: {
                ...briefingData.query,
                reportTypes: {
                    ...briefingData.query.reportTypes,
                    SIGMET: event.target.checked
                }
            }
        });
    };

    const toggleTaf = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateContext({
            ...briefingData,
            query: {
                ...briefingData.query,
                reportTypes: {
                    ...briefingData.query.reportTypes,
                    TAF_LONGTAF: event.target.checked
                }
            }
        });
    };

    const isErroredCheckboxes = isFormSendable(briefingData);

    return (
        <FormControl required error={isErroredCheckboxes} variant="standard" component="fieldset">
            <FormGroup row={true}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={briefingData.query.reportTypes.METAR}
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
                            checked={briefingData.query.reportTypes.SIGMET}
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
                            checked={briefingData.query.reportTypes.TAF_LONGTAF}
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
