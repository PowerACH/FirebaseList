import React, { Component } from 'react';
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'

import singleEntry from './components/AnEntry'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
         <Navbar />
         <Switch>
          <Route path='/' component={ Home } />
          <Route path='/:id' component={ singleEntry } />
         </Switch>
       </div>
      </BrowserRouter>
    );
  }
}

