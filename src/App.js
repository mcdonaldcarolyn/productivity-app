
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes.js';
import Create from './pages/Create.js';
import TodoCard from './Components/todo/TodoCard';
import { Header } from './Components/Header';
import { Timer } from './Components/Timer';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/private-theming';
import { purple } from '@mui/material/colors';
import Layout from './Components/Layout/Layout';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Router>
        <Layout>
        <Switch>
          
          <Route exact path='/'>
            
            <Notes/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
        </Switch>
        </Layout>
      </Router>
     </ThemeProvider>
  );
}

export default App;
