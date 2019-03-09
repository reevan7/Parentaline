import React, { Component } from 'react';
import Home from './components/Home/home'
import Contact from './components/Contact/contact'
import PageArticle from './components/Page-article/page-article'
import PageConseil from './components/Page-conseil/page-conseil'
import PagePedagogique from './components/Page-pedagogique/page-pedagogique'
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
          <Route path="/articles" component = { PageArticle} />
          <Route path="/conseils" component = {PageConseil} />
          <Route path='/conseils/pedagogique' component = {PagePedagogique} />
        </Switch>
      </div>
    </HashRouter>
  }
}


export default App;
