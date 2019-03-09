import React, { Component } from 'react';
import './navbar.scss'
import mainLogo from './assets/logo-parentaline_03.png'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(){
    super()
    this.state = ({
      cross : true,
      responsive : true,

    })
    this.click = this.click.bind(this);

  }
  handleClick() {
    this.setState ({
      cross : !this.state.cross
    })
  }
  handleClick2() {
    this.setState ({
      responsive : !this.state.responsive
    })
  }
  click(){
    this.handleClick();
    this.handleClick2()
  }
  render() {
  return (
      <section className='Menu'>
        <div className="container">
          <div className="row row-nav">
            <div className="col-sm-2 col-4">
              <img className="mainLogo" src= { mainLogo }  alt="Logo principal"/>
            </div>
            <div className="col-lg-5 col-2">
            </div>
            <div className="col-sm-5">
              <nav className="nav"><span className="box">
                <button className={this.state.cross ? "hamburger" : "hamburger cross"} onClick = {this.click} id="button-1">
                  <span className="hamburger__line"></span>
                  <span className="hamburger__line"></span>
                  <span className="hamburger__line"></span>
                </button>
              </span>
              <ul className={this.state.responsive ? "amenu test" : "amenu mobile2"}>
                  <li className="premierLi"><a className={this.state.responsive ? "nav-link" : "nav-link mobile"} href="#">Accueil</a></li>
                  <li><a className={this.state.responsive ? "nav-link" : "nav-link mobile"} href="#"><Link to="conseils">Conseils</Link></a>
                    <ul>
                      <li><a className={this.state.responsive ? "nav-link" : "nav-link mobile"} href="#"><Link to="conseils/pedagogique">Conseils Pédagogiques</li>
                    </ul>
                    </li>
                  <li><a className={this.state.responsive ? "nav-link" : "nav-link mobile"} href="#"><Link to="articles">Articles</link></a></li>
                  <li><a className={this.state.responsive ? "nav-link" : "nav-link mobile"} href="#"><Link to="contact">Contact</Link></a></li>
              </ul>
              </nav>
            </div>
          </div>
        </div>
</section>
  );
  }
}

export default Navbar;
