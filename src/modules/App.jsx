import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import Sidebar from './Sidebar'
import Routes from './Routes'

const App = () => (
  <Fragment>
    <Sidebar />
    <Routes />
  </Fragment>
)

export default hot(module)(App)
