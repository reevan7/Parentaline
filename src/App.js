import React, { Component } from 'react';
import Home from './components/Home/home'
import Contact from './components/Contact/contact'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

window.React = React

class App extends Component {
  render() {
    return <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/contact" component= {Contact} />
        </Switch>
      </div>
    </HashRouter>
  }
}


export default App;
