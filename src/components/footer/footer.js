import React, { Component } from 'react';
import './footer.scss'
import LogoBlanc from './assets/logo-blanc.png'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'


class Footer extends Component {
  render () {
    return (

      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-8">
              <img src={LogoBlanc} className="logoBlanc" alt="logo"/>
            </div>

            <div className="col-md-4 col-sm-6 offset-md-5 col-10">
              <div className="emailParentaline">
                <span>Parentaline@parentaline.fr</span>
              </div>
              <div className="reseaux">
                  <img src={facebook} className="facebook" alt="facebook"/>
                  <img src={twitter}  className="twitter" alt="twitter"/>
                  <img src={linkedin}  className="linkedin" alt="linkedin"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 offset-sm-4 copyright">
              Copyright | Mentions légales
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Footer
