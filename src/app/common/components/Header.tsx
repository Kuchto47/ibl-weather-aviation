import { PropsWithChildren } from "react";
import { createUseStyles } from "react-jss";
import { MaterialUISwitch } from "./MuiThemeSwitch";
import { AppBar, Toolbar } from "@mui/material";

interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const useStyles = createUseStyles({
    themeSwitcher: {
        marginLeft: 'auto'
    },
    appBar: {
        backgroundImage: 'url("src/assets/airport_panorama.jpg")',
        backgroundSize: 'cover',
    }
});

export const Header = (props: PropsWithChildren<Props>) => {
    const styles = useStyles();
    return (
        <AppBar className={styles.appBar}>
            <Toolbar>
                <div className={styles.themeSwitcher}>
                    <MaterialUISwitch checked={props.darkMode} onChange={props.toggleDarkMode} />
                </div>
            </Toolbar>
        </AppBar>
    );
};