import { Theme } from '@mui/material';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ResponsiveDivider = () => {
    const isLgScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));

    return <Divider orientation={isLgScreen ? 'horizontal' : 'vertical'} />;
};
