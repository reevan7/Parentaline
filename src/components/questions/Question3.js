import React, { Component } from 'react';
import './questions.scss'
import Collapse from 'react-bootstrap/Collapse'
import arrow from './assets/arrow-204-64.png'

class Question3 extends Component {
  constructor(props, context) {
   super(props, context);

   this.state = {
     open: false,
     button: true,
     border: false
   }
   this.click = this.click.bind(this);
 }

  handleClick(){
   this.setState({
     button : !this.state.button
   })
 };
 handleClick2(){
   const { open } = this.state;
   this.setState({ open: !open })
 };
 handleBorder() {
   this.setState({
     border : !this.state.border
   })
 }

 click(){
   this.handleClick();
   this.handleClick2();
   this.handleBorder()
 }
  render() {
    const { open } = this.state;
    return (
      <section className="questionsection2">
       <div className="style-boutton">
        <button
          onClick={this.click}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className = { this.state.button ? 'buttonTrue closed' : 'buttonFalse opened'}
        >
        <p className="question-text">Vous parlez de conseils à domicile, dans quel secteur intervenez-vous ?</p>
        <div className="horizontal"></div>
        <div className="vertical"></div>
          <div>
            <img src = { arrow } alt ="arrow" className="arrow"/>
          </div>
        </button>
      </div>
        <div className={ this.state.border ? 'text-Active' : 'text-disabled'}>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text" className="texte">
            Les rencontres peuvent se faire sur Aix-en-Provence
            les vendredis après-midi (8, rue Thiers) ou à votre domicile autour
            d'Aix-en-Provence (frais kilométriques à ajouter à la séance).
          </div>

        </Collapse>
          </div>
      </section>

    )
  }
}

export default Question3
