import { useState } from 'react';
import { Header } from './common/components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Content } from './common/components/Content';

export const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((currentTheme) => !currentTheme);
    };

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#90aaff'
            },
            secondary: {
                main: '#131052'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Content />
        </ThemeProvider>
    );
};
