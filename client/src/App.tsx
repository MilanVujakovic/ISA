import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './routes/Home'
import { myTheme } from './assets/theme/theme';

const App = () => {
    return <ThemeProvider theme={myTheme}>
                <GlobalStyle />
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                    </Switch>
                </Router>
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
`

export default App;
