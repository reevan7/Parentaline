import React, { Component } from 'react';
import headerImg from './assets/fond1.png'
import headerMob from './assets/fond-mob.png'
import './approche.css'
import titre from './assets/Texte.png'

class Approche extends Component {
  render () {
    return (

      <section>
        <div className="position-bloc">
        <div className = "image-header">
          <img src= { headerImg } alt="header"className="imageFull"/>
          <img src= { headerMob } alt="header" className="imageMob"/>
        </div>
        <div className="titre">
          <img className='titre-img' src= {titre} alt="titre"/>
          <h2 className="titre2">Conseil en Parentalité</h2>
        </div>
        <div className="boutton">
          <button className="boutton-gauche">En savoir plus</button>
          <button className="boutton-droit">Prendre rendez-vous</button>
        </div>
        <div className="bloc-approche">
          <div className="container">
            <div className="row">
              <div className="approche-carre">
                <h2 className="titre-bloc-gauche">L'approche</h2>
                <p className="bloctext-gauche">Tout commence dés le désir d'enfant.
                  L'arrivée de cet enfant idéalisé apporte non seulement bonheur, projets, mais aussi inquiétudes et doutes.
                  Il n’aura de cesse de nous remettre en question.
                  Devenir parent est un processus lent, progressif qui nécessite souvent une écoute active.
                  Ce besoin de vouloir faire au mieux pour protéger son enfant doit être soutenu par une parole bienveillante.
                  Parentaline est destiné aux parents soucieux d'enrichir la relation avec leur enfant.
                  Par des conseils éducatifs adaptés aux besoins et à la personnalité de votre enfant,
                  nous chercherons ensemble à mieux le comprendre et canaliser son énergie.
                </p>
                <p className="separateur"></p>
              </div>
              <div className="propos-carre">
                <h2 className="titre-bloc-droit">A propos</h2>
                <p className="bloctext-droit">
                  Infirmière-puéricultrice depuis 26 ans, je dirige des structures d'accueil petite enfance.
                  J'ai suivi des formations sur les émotions des jeunes enfants,  le libre agir, la motricité libre et l'importance de la contenance du donneur de soin.
                  Ces expériences m'ont orientée vers cet accompagnement à la parentalisation : être parent peut être déstabilisant, les sentiments de frustration,
                  d'impuissance, d'incompréhension, d'être démuni sont souvent présents.
                  Avec Parentaline, je souhaite vous accompagner dans un cadre bienveillant vers une éducation où chacun, parent/enfant, se sent écouté, compris et respecté.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className = "bloc-texte-cta">
          <h2>La parentalité</h2>
          <p>« Il n'y a pas de plus belle aventure que celle de la parentalité »<br />
          Alors qu'est-ce qu-être parent ?
          </p>
            <button className="boutton-cta">En savoir plus</button>
        </div>
      </div>
      </section>


    )
  }
}

export default Approche;
