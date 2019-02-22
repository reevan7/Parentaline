import React, { Component } from 'react';
import axios from 'axios'
import './formulaire.css'

const API_PATH = 'http://localhost:3000/index.php';

class Formulaire extends Component {
  constructor(props) {
  super(props);
  this.state = {
  fname: '',
  lname: '',
  email: '',
  tel: '',
  message: '',
  mailSent: false,
  error: null
};
  this.handleFormSubmit = this.handleFormSubmit.bind(this)
}
handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: { 'content-type': 'application/json' },
    data: this.state
  })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({ error: error.message }));
};
  render() {
  return (

      <form className="formul" action="#" >

        <div className="ligne1">
          <input type="text" id="fname" name="firstname" placeholder="Nom"
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
            required />

          <input type="text" id="lname" name="lastname" placeholder="Prénom"
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
          required  />
        </div>

        <div className="ligne2">
          <input type="email" id="email" name="email" placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          required  />

        <input type="text" id="tel" name="tel" placeholder="Téléphone"
              value={this.state.tel}
              onChange={e => this.setState({ tel: e.target.value })}
            maxLength="10"  />
          </div>

          <div className="situation">
            <textarea id="message" name="message" placeholder="Décrivez votre situation"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
          </div>

          <div className="envoi">
            <input type="submit" id="submit" onClick={e => this.handleFormSubmit(e)} value="Prendre rendez-vous" />
          </div>

          <div>
    {this.state.mailSent &&
      <div>Thank you for contcting us.</div>
    }
  </div>
      </form >





  );
}
}

export default Formulaire
