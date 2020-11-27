import React from 'react';
<<<<<<< HEAD
import { BrowserRouter,Route } from 'react-router-dom'
import Center from './Pages/Center'
import ReadNews from './Pages/ReadNew'
import Profile from './Pages/Profile'



// import { Container } from './styles';
=======
import { BrowserRouter, Route } from 'react-router-dom'
import ListNews from './pages/ListNews'
import News from './pages/News'
>>>>>>> e5b260e311491ff955c428d0ce4a7d5e6e52cc9b

function Routes() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
        <Route path="/" exact component={Center} />

        <Route path="/news/:id" component={ReadNews} />

        <Route path="/profile/:id" component={Profile} />

=======
      <Route path="/" exact component={ListNews} />
      <Route path="/news/:id" component={News} />
>>>>>>> e5b260e311491ff955c428d0ce4a7d5e6e52cc9b
    </BrowserRouter>
  )
}

export default Routes;