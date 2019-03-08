import React from 'react'
import Navbar from '../navbar/Navbar'
import Approche from '../approche/Approche'
import Articles from '../articles/Articles'
import FormulairePres from '../formulaire/FormulairePres'
import Questions from '../questions/Questions'
import Footer from '../footer/footer'

const Home = () =>
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

export default Home
