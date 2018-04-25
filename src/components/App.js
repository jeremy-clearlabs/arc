import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Loadable from 'react-loadable';

import { 
  AsyncHomePage, 
  AsyncSamplePage, 
  AsyncNotFoundPage 
} from './pages'
// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

console.log('AsyncHomePage', AsyncHomePage);

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={AsyncHomePage} exact />
        <Route path="/sample-page" component={AsyncSamplePage} />
        <Route component={AsyncNotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
