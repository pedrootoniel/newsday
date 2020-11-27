import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Center from './Pages/Center'
import ReadNews from './Pages/ReadNew'
import Profile from './Pages/Profile'




// import { Container } from './styles';

function Routes({ authUser }) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Center} />
        <Route path="/news/:id" component={(props) => {
          return authUser.authenticated ? <ReadNews {...props} /> : <Redirect to='/' />
        }} />
        <Route path="/profile/user/" component={(props) => authUser.authenticated ? <Profile {...props} /> : <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;