
import React, { Component } from 'react';
import intro from './Projects/1/Wizualizacja2.jpg';
import './App.css';
import './style.css';
import Projects from './Project.js'
import Data from './data.json'
import MetaTags from 'react-meta-tags';
import Mailto from 'react-protected-mailto'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: 0,
    }
    this.path = "./Projects/"
  }

  showMenu() {
    console.log("test")
    var x = document.getElementsByClassName("links-mobile")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  hideMenu() {
    var x = document.getElementsByClassName("links-mobile")[0];
    x.style.display = "none";
  }

  handleImageLoaded = () => {

    this.setState({ imagesLoaded: this.state.imagesLoaded + 1 });
  }


  render() {
    return (
      <div>
        {this.state.imagesLoaded < 1 &&
          <div className="loaderBackground">
            <div className="loader">
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
          </div>
        }
        <div>
          <MetaTags>
            <title>Anna Gleń</title>
            <meta name="description" content="Anna Gleń Architekt, Poznań" />
            <meta property="og:title" content="Anna Gleń" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </MetaTags>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="header">
            <div className="menu">
              <a href="#home" className="button">Anna Gleń</a>
              <div className="links-mobile">
                <a href="#projects" className="button" onClick={this.hideMenu}>Projects</a>
                <a href="#about" className="button" onClick={this.hideMenu}>About</a>
                <a href="#contact" className="button" onClick={this.hideMenu}>Contact</a>
              </div>
              <div className="links">
                <a href="#projects" className="button">Projects</a>
                <a href="#about" className="button">About</a>
                <a href="#contact" className="button">Contact</a>
              </div>
              <a className="icon" onClick={this.showMenu}><i className="fa fa-bars"></i></a>
            </div>
          </div>
          <header className="intro" style={{ 'maxWidth': '1500px' }} id="home">
            <img src={intro} onLoad={this.handleImageLoaded} onError={this.handleImageLoaded} alt="Architecture"></img>
            <div className="intro-title">
              <h1 className="logo">Anna Gleń</h1>
            </div>
          </header>
          <div id="about" className="dummy-scroll"></div>
          <div className="section" >
            <h3 className="title">About</h3>
            <div className="text-field">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
          </div>
          <div className="content">
            <div id="projects" className="dummy-scroll"></div>
            <div className="section">
              <h3 className="title">Projects</h3>
              {Data.map((item, index) => (
                <Projects key={index} data={item} odd={index % 2} handleImageLoaded={this.handleImageLoaded} path={this.path} index={index + 1} />
              ))}
            </div>
            <div id="contact" className="dummy-scroll"></div>
            <div className="section" >
              <h3 className="title">Contact</h3>
              <p>Hello! I would love to have some hearing from you, whether it is coordination or just some comment of my works.</p>
              e-mail: <Mailto email='anna.glen.archi@gmail.com'/>
              </div>
          </div>
          <footer className="footer">
            <p>Created by Łukasz Grygier at <Mailto email='lukaszgrygier@icloud.com' />
            </p>
          </footer>
        </div>
      </div>
    )
  }
}

export default App;
