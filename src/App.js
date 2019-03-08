import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Approche from './components/approche/Approche'
import Articles from './components/articles/Articles'
import FormulairePres from './components/formulaire/FormulairePres'
import Questions from './components/questions/Questions'
import Footer from './components/footer/footer'
import Home from './components/Home/home'
import Contact from './components/Contact/contact'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

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
