import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

// import { HomePage, SamplePage, NotFoundPage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`


class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount() {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const HomePage = props => (
  <DynamicImport load={() => import('./pages/HomePage')}>
    {Component => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)
const SamplePage = props => (
  <DynamicImport load={() => import('./pages/SamplePage')}>
    {Component => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)
const NotFoundPage = props => (
  <DynamicImport load={() => import('./pages/NotFoundPage')}>
    {Component => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sample-page" component={SamplePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
