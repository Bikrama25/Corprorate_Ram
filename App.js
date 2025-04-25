import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import Meditation from './pages/Meditation';
import Auth from './pages/Auth';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: { main: '#4e73df' },
    secondary: { main: '#1cc88a' },
    background: { default: '#f8f9fc' }
  },
  typography: {
    fontFamily: '"Nunito", sans-serif'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/meditation" component={Meditation} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
