import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ListNews from './pages/ListNews'
import News from './pages/News'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListNews} />
      <Route path="/news/:id" component={News} />
    </BrowserRouter>
  )
}

export default Routes;