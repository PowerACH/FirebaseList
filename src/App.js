import React, { Component } from 'react';
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
         <Navbar />
         <Switch>
          <Route path='/' component={ Home } />
         </Switch>
       </div>
      </BrowserRouter>
    );
  }
}

