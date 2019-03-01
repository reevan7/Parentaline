import React, { Component } from 'react';
import './articles.css'
import article1 from './assets/33089507-mom-and-kid-boy-painting-together-at-home.png'
import article1Mob from './assets/article1-mob.png'
import article2 from './assets/405519-PCVNGC-619.png'
import article2Mob from './assets/article2-mob.png'

class Articles extends Component {
  render () {
    return (
      <section className="sectionArticle">
      <div className="container">
        <div className="row article1">
          <div className="col-sm-5">
            <img className="article1-img" src={ article1} alt="article1"/>
            <img className="article1-imgMob" src={ article1Mob} alt="article1"/>
              </div>
            <div className="col-sm-7 article1-text">
              <h2>Conseils en puériculture</h2>
              <span>
                Enfin votre bébé est là ! 1ères inquiétudes et 1er stress. A la maternité des professionnels de la toute petite enfance sont présents pour vous
                rassurés et vous accompagner dans cette rencontre avec votre enfant. Le retour à la maison est réconfortant mais également déstabilisant.
                 Le sentiment d'être perdu et désarmé face à ce petit être est très fréquent. Par une écoute active, une connaissance de votre enfant,
                  vos compétences, Parentaline vous accompagne pour trouver ensemble les solutions les plus adaptées autour du sommeil, de l'alimentation,
                   du rythme de vie, du portage, des soins d'hygiène...<br />
                   -A domicile : à proximité d'Aix en Provence : 45mn d'entretien à 50 euros + frais kilométriques
                   -Via skype : 45mn d'entretien à 50 euros

              </span>
            </div>

        </div>
        <div className="row article2">
          <div className="col-sm-5 Mob">
            <img className="article2-imgMob" src={ article2Mob} alt="article2"/>
          </div>
            <div className="col-sm-7 article2-text">
              <h2>Titre</h2>
              <span>Après 15 mois d'infirmière en service pédiatrique  sur Necker (Paris Vème), je me suis spécialisée en puériculture.
              Depuis 26 ans je dirige des structures d'accueil petite enfance, j'interviens lors de formations auprès des assistantes
              maternelles, des CAP petite enfance, des auxiliaires en puériculture et des infirmières-puéricultrices. Pour approfondir
              cet intérêt, j'ai suivi des formations sur les émotions des jeunes enfants,  le libre agir, la motricité libre et l'importance
               de la contenance du donneur de soin (holding et handling). </span>
            </div>
            <div className="col-sm-5">
              <img className="article2-img" src={ article2} alt="article2"/>
            </div>
        </div>
    </div>
    </section>
  );
  }
}

  export default Articles
