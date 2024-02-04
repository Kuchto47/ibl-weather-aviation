import { useState } from 'react';
import { Header } from './common/components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Content } from './common/components/Content';
import { BriefingContextProvider } from './weather_briefing/contexts/BriefingContextProvider';

export const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((currentTheme) => !currentTheme);
    };

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#90aaff',
                light: '#EEE',
                dark: '#414141'
            }
        }
    });

    return (
        <BriefingContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <Content />
            </ThemeProvider>
        </BriefingContextProvider>
    );
};
