import { PropsWithChildren } from "react";
import { createUseStyles } from "react-jss";
import { MaterialUISwitch } from "./MuiThemeSwitch";

interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const useStyles = createUseStyles({
    themeSwitcher: {
        textAlign: 'right'
    }
});

export const OptionsPanel = (props: PropsWithChildren<Props>) => {
    const styles = useStyles();
    return (
        <div className={styles.themeSwitcher}>
            <MaterialUISwitch checked={props.darkMode} onChange={props.toggleDarkMode} />
        </div>
    );
};