import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Approche from './components/approche/Approche'
import Articles from './components/articles/Articles'
import FormulairePres from './components/formulaire/FormulairePres'
import Questions from './components/questions/Questions'
import Footer from './components/footer/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Approche />
        <Articles />
        <FormulairePres />
        <Questions />
        <Footer />
      </div>
    );
  }
}

export default App;
