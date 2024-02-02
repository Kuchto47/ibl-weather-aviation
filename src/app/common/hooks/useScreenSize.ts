import { Theme, useMediaQuery } from '@mui/material';

export const useScreenSize = () => {
    const isSmallerThanMdScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
    return isSmallerThanMdScreen;
};
