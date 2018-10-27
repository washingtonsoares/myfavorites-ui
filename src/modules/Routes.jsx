import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dasboard from './Dashboard'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dasboard} />
    </Switch>
  </main>
)

export default Routes
