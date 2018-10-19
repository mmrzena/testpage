import React, { Component } from 'react';
import './content-base.css';
import Title from '../general/div';
import DemoTag from '../general/div';
import downloadTagPurple from '../Images/downloadTagPurple.svg';
import Image from '../general/img';
import Button from '../general/button';
import Builds from './builds'
import Statistics from './statistics';


class ContentBase extends Component {

  render() {
    return (
      <div className="content-base">
        <DemoTag className='demotag'>
            <Image src={downloadTagPurple} className='downloadTagPurple'/>
            DEMO AVAILABLE
        </DemoTag>
        <Title className='title'>ORANGE CAST</Title>
        <Button className='btn'>ABOUT</Button>
        <Button className='btn downloadBtn'>DOWNLOAD</Button>
        <Button className='btn'>FAQ</Button>
        <Builds/>
        <div className='note'>Please note that protagonist.gg doesnt have any responsibility to damage done to your device by downloading and using this program.</div>
        <Statistics/>
        
      </div>
    );
  }
}

export default ContentBase;
