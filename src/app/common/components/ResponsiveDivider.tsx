import Divider from '@mui/material/Divider';
import { useScreenSize } from '../hooks/useScreenSize';

export const ResponsiveDivider = () => {
    const isSmallScreen = useScreenSize();

    return <Divider orientation={isSmallScreen ? 'horizontal' : 'vertical'} />;
};
