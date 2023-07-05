import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const root = ReactDOM.createRoot(document.getElementById('root'));


const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#D6D60B',
            dark: '#74FF4A',
            light: '#D6D60B',
        },
        secondary: {
            main: '#F5D700',
        },
        text: {
            primary: '#FFEBEE',
            hint: '#15621A',
        },
        info: {
            main: '#B96115',
            contrastText: '#AA2F2F',
        },
        success: {
            main: '#34FD3E',
        },
        divider: 'rgba(150,29,29,0.12)',
        background: {
            paper: '#000000',
        },
    },
}
  );


root.render(


    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>


            <App />




        </BrowserRouter>
    </ThemeProvider>

);


