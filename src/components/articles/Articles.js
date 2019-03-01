import React, { Component } from 'react';
import './articles.css'
import article1 from './assets/33089507-mom-and-kid-boy-painting-together-at-home2.png'
import article1Mob from './assets/article1-mob.png'
import article2 from './assets/405519-PCVNGC-6192.png'
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
                Enfin votre bébé est là ! Premières inquiétudes et premiers stress. À la maternité des professionnels de la toute petite enfance sont présents pour vous
                rassurer et vous accompagner dans cette rencontre avec votre enfant. Le retour à la maison est réconfortant mais également déstabilisant.
                 Le sentiment d'être perdu et désarmé face à ce petit être est très fréquent. Par une écoute active, une connaissance de votre enfant,
                  vos compétences, Parentaline vous accompagne pour trouver ensemble les solutions les plus adaptées autour du sommeil, de l'alimentation,
                   du rythme de vie, du portage, des soins d'hygiène...
              </span>
            </div>

        </div>
        <div className="row article2">
          <div className="col-sm-5 Mob">
            <img className="article2-imgMob" src={ article2Mob} alt="article2"/>
          </div>
            <div className="col-sm-7 article2-text">
              <h2>Conseils en parentalité</h2>
              <span>
                  Votre enfant grandit, s'oppose, teste les limites, questionne les relations et les règles !
                   Pas si simple d'être contenant et éducateur ! Parfois seul ou en désaccords parentaux, le doute
                   et l'incertitude s'installent et laissent place à un sentiment d'incapacité voir d'être
                    mauvais parents. Par une écoute spécifique de vos difficultés, une connaissance du développement
                    psycho- affectif, des conseils éducatifs adaptés, une approche communicante participative,
                    vos compétences, Parentaline vous accompagne pour trouver ensemble les solutions les plus adaptées
                    afin d'améliorer votre quotidien et celui de votre enfant en répondant au mieux à ses besoins.
                  </span>
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
