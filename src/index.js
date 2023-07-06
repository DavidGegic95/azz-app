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
          main: '#2ab32a',
          dark: '#74ff4a',
          light: '#2ab32a',
        },
        secondary: {
          main: '#46a80c',
        },
        text: {
          primary: '#ffffff',
          hint: '#48dc4f',
          secondary: 'rgba(253,253,253,0.7)',
        },
        info: {
          main: '#b96115',
          contrastText: '#aa2f2f',
        },
        success: {
          main: '#34fd3e',
        },
        divider: 'rgba(150,29,29,0.12)',
        background: {
          paper: '#2b2929',
          default: '#272725',
        },
        error: {
          main: '#e01c0d',
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


