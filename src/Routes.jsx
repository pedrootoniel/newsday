import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import Center from './Pages/Center'
import ReadNews from './Pages/ReadNew'
import Profile from './Pages/Profile'



// import { Container } from './styles';

function Routes() {
  return(
    
    <BrowserRouter>
        <Route path="/" exact component={Center} />

        <Route path="/news/:id" component={ReadNews} />

        <Route path="/profile/:id" component={Profile} />

    </BrowserRouter>

  )


  
}

export default Routes;