import React, { Component } from 'react';
import axios from 'axios'
import './formulaire.css'


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lname:"", email: "", tel:"", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, lname, tel, message } = this.state;
    return (
      <form className="formul" onSubmit={this.handleSubmit}>
        <div className="ligne1">
          <input type="text" name="name" id="fname" value={name} onChange={this.handleChange} placeholder="Nom" required/>
          <input type="text" name="lname" id="lname" value={lname} onChange={this.handleChange} placeholder="Prénom" required/>
        </div>
        <div className="ligne2">
          <input type="email" name="email" id="email" value={email} onChange={this.handleChange} placeholder="Email" required/>
          <input type="text" name="tel" id="tel" value={tel} onChange={this.handleChange} placeholder="Téléphone" maxLength="10"/>
        </div>
        <div className="situation">
          <textarea name="message" id="message" value={message} onChange={this.handleChange} placeholder="Décrivez votre situation" />
        </div>
        <div className="envoi">
          <button id="submit" type="submit">Send</button>
        </div>
      </form>
    );
  }
}


export default Formulaire
