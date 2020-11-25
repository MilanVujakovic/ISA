import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { myTheme, muiTheme } from './assets/theme/theme';
// Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// components
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';

// routes
import Home from './routes/Home';
import Login from './routes/Login';

const themeMUI = createMuiTheme(muiTheme);

const App = () => {
    return <ThemeProvider theme={ myTheme }>
                <MuiThemeProvider theme={themeMUI}>
                    <GlobalStyle />
                    <Router>
                        <Header isAuthenticated={ false } />
                        <NavigationMenu isAuthenticated={ true } />
                        <Switch>
                            <Route exact path="/" component={ Home } />
                            <Route exact path="/login" component={ Login } />
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </ThemeProvider>
}

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        display: flex;
        flex-flow: column;
        min-height: 100vh;
    }

    :root {
        font-size: 62.5%;
    }

    a, u {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        outline: none;
        border: none;
        background-color: inherit;
        font-size: 1.6rem;
    }
`

export default App;
