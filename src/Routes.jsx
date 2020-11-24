import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import Center from './Components/Center'
import ReadNews from './Components/ReadNew'



// import { Container } from './styles';

function Routes() {
  return(
    
    <BrowserRouter>
        <Route path="/" exact component={Center} />

        <Route path="/news/:id" component={ReadNews} />
    </BrowserRouter>

  )


  
}

export default Routes;