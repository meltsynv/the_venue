import React, {Component} from 'react';
import './resources/styles.css';

//components
import Header from './components/header_footer/Header';
import Featured from './components/featured/';
import VanueNfo from './components/venueNfo/';
import Highlights from './components/highlights';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header />
        <Featured />
        <VanueNfo />
        <Highlights />
      </div>
    )
  }
}

export default App;
