import React from 'react'
import { Switch, Route, Redirect,Link } from 'react-router-dom'
import localStorage from 'localStorage'

import Header from './HeaderFooter/Header';
import Login from './pages/Login'
import Main from './pages/Main'
import About from './pages/About'
import Index from './pages/Index'

const Routes = () => (
    <Switch>
       <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/about" component={About} />
      
      {/* {!localStorage.getItem('username') ? (
        <Redirect to="/login" />
      ) : (
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      )} */}
    </Switch>
  )
  
  export default Routes