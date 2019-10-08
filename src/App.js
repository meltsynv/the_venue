import React, {Component} from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll'

//components
import Header from './components/header_footer/Header';
import Featured from './components/featured/';
import VanueNfo from './components/venueNfo/';
import Highlights from './components/highlights';
import Pricing from './components/pricing'
import MapLocation from './components/locaion'
import Footer from './components/header_footer/footer';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venue">
          <VanueNfo />
        </Element>
        <Element name="highlight">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <MapLocation />
        </Element>
        <Footer/>
      </div>
    )
  }
}

export default App;
