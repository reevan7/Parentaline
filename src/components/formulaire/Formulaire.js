import React, { Component } from 'react';
import './formulaire.css'


const Formulaire = () => (
      <form
      name="contact"  method="POST"   netlify>

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
            <button type="submit" id="submit">Prendre Rendez-vous</button>
          </div>
      </form >
)

export default Formulaire
