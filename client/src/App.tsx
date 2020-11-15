import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './routes/Home'

const App = () => {
    return <div>
        <GlobalStyle />
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
            </Switch>
        </Router>
    </div>
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-size: 1.6rem;
    }
    :root {
        font-size: 62.5%;
    }
`

export default App;
