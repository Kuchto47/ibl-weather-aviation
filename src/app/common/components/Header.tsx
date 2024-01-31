import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    headerWrapper: {
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        height: '250px'
    }
})

export const Header = () => {
    const pathToPic = 'src/assets/airport_panorama.jpg';
    const styles = useStyles();
    return (
        <div className={styles.headerWrapper}>
            <img src={pathToPic} />
        </div>
    );
};