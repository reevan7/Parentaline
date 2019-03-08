import React, { Component } from 'react';
import Formulaire from './Formulaire'
import './formulairePres.css'
import imageFond from './assets/image form.png'
import imageFondMob from './assets/image_form_mob.png'

class FormulairePres extends Component {
  render() {
  return (
      <section>
        <div className="container">
        <div className="imageFond">
          <img src={imageFond} className="imageFull2" alt="questionnaire"/>
          <img src={imageFondMob} className="imageMob2" alt="questionnaire"/>
        </div>

          <div className="row form-dessus">
            <div className="col-sm-4 texteForGauche">
              <h2>Prenez rendez-vous</h2>
              <span>Expliquer moi votre problématique, votre questionnement ou votre situation et je vous
                 contacterai par Email ou par Téléphone afin de fixer un premier rendez-vous</span>
            </div>
            <div className="col-sm-8 formulaireCom">
                <Formulaire />
            </div>
          </div>
        </div>
      </section>
  );
  }
}

export default FormulairePres;
