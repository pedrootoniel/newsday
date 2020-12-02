import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { List } from './pages/List'
import { MyNews } from './pages/MyNews'
import Notice from './pages/Notice'
import Profile from './pages/Profile'

function Routes({ authUser }) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/news/:id" component={(props) => {
          return authUser.authenticated ? <Notice {...props} /> : <Redirect to='/' />
        }} />
        <Route path="/profile/user/" component={(props) => 
          authUser.authenticated ? <Profile {...props} /> : <Redirect to='/' />} />
        <Route path="/mynews/user/" component={(props) => 
          authUser.authenticated ? <MyNews {...props} /> : <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes