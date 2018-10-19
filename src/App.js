import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import Gallery from './components/gallery/gallery';
import ContentBase from './components/content-base/content-base';
import Card from './components/cards/card';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        
       <Navbar/>
          <div className='appContainer'>
            <div className='galleryContentContainer'>
               <Gallery/>
               <ContentBase/>
            </div>
            <div className='cardsContainer'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
