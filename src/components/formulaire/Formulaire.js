import React, { Component } from 'react';
import './formulaire.css'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Formulaire extends Component  {
  constructor(props) {
    super(props);
    this.state = { lname: "", fname:"", tel:"", email: "", message: "" };
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

  render(){
  const { fname, lname, tel, email, message } = this.state;
  return (
    <form onSubmit={this.handleSubmit}>

        <div className="ligne1">
          <input type="text" id="fname" name="firstname" placeholder="Nom"
            value={ fname } onChange={this.handleChange}  />

          <input type="text" id="lname" name="lastname" placeholder="Prénom"
            value={ lname } onChange={this.handleChange}
          required  />
        </div>

        <div className="ligne2">
          <input type="email" id="email" name="email" placeholder="Email"
            value={ email } onChange={this.handleChange}
            /

        <input type="text" id="tel" name="tel" placeholder="Téléphone"
          value={ tel } onChange={this.handleChange}
            maxLength="10"  />
          </div>

          <div className="situation">
            <textarea id="message" name="message" placeholder="Décrivez votre situation"
              value={ message } onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="envoi">
            <button type="submit" id="submit">Prendre Rendez-vous</button>
          </div>
      </form >

)
}
}

export default Formulaire
