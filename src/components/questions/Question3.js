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
        <p className="question-text">Did you find any droids? No, sir. If there were any on board, they must also have jettisoned.</p>
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
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>

        </Collapse>
          </div>
      </section>

    )
  }
}

export default Question3
