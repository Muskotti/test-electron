import React from 'react';
import './App.css';
import ButtonAppBar from './Toolbar/Toolbar';
import { BrowserRouter, } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ButtonAppBar></ButtonAppBar>
      </BrowserRouter>
    </ThemeProvider>
  );

}
