import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import { ChangeEvent, useCallback, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { BriefingContext } from '../contexts/BriefingContext';
import { isFormSendable } from '../utils/isFormSendable';
import { ReportTypes } from '../model/WeatherQuery';

const useStyles = createUseStyles({
    checkbox_margin: {
        marginRight: '-7px'
    },
    label_padding: {
        paddingRight: '15px'
    },
    unselectableLabel: {
        userSelect: 'none'
    }
});

export const Checkboxes = () => {
    const { briefingData, updateContext } = useContext(BriefingContext);

    const styles = useStyles();

    const updateCheckboxes = useCallback(
        (reportType: Partial<ReportTypes>) => {
            updateContext({
                ...briefingData,
                query: {
                    ...briefingData.query,
                    reportTypes: {
                        ...briefingData.query.reportTypes,
                        ...reportType
                    }
                }
            });
        },
        [briefingData, updateContext]
    );

    const toggleMetar = (event: ChangeEvent<HTMLInputElement>) => {
        updateCheckboxes({ METAR: event.target.checked });
    };

    const toggleSigmet = (event: ChangeEvent<HTMLInputElement>) => {
        updateCheckboxes({ SIGMET: event.target.checked });
    };

    const toggleTaf = (event: ChangeEvent<HTMLInputElement>) => {
        updateCheckboxes({ TAF_LONGTAF: event.target.checked });
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
                    className={`${styles.label_padding} ${styles.unselectableLabel}`}
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
                    className={`${styles.label_padding} ${styles.unselectableLabel}`}
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
                    className={`${styles.label_padding} ${styles.unselectableLabel}`}
                />
            </FormGroup>
        </FormControl>
    );
};
