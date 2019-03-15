import React, { Component } from 'react';
import './formulaire.css'

const API_PATH = 'https://parentaline.netlify.com/index.php';

class Formulaire extends Component {
  render() {
  return (

      <form
        method="post"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field">

        <div className="ligne1">
          <input type="text" id="fname" name="firstname" placeholder="Nom"

            required />

          <input type="text" id="lname" name="lastname" placeholder="Prénom"

          required  />
        </div>

        <div className="ligne2">
          <input type="email" id="email" name="email" placeholder="Email"

          required  />

        <input type="text" id="tel" name="tel" placeholder="Téléphone"

            maxLength="10"  />
          </div>

          <div className="situation">
            <textarea id="message" name="message" placeholder="Décrivez votre situation"

            ></textarea>
          </div>

          <div className="envoi">
            <input type="submit" id="submit" value="Prendre rendez-vous" />
          </div>
      </form >





  );
}
}

export default Formulaire
