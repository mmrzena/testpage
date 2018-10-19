import React, { Component } from 'react';
import './gallery.css';
import Image from '../general/img';
import vid from '../Images/vid.png';
import thumbnail1 from '../Images/thumbnail1.png';
import thumbnail2 from '../Images/thumbnail2.png';
import thumbnail3 from '../Images/thumbnail3.png';
import thumbnail4 from '../Images/thumbnail4.png';
import thumbnail5 from '../Images/thumbnail5.png';
import thumbnail6 from '../Images/thumbnail6.png';
import Div from '../general/div';

class Gallery extends Component {
  constructor(){
    super();

    this.state = {
        vid: vid,
        display: 'block'
    }

  }

  imgChange(e) {
    this.setState({vid: e.target.src, display: 'none'})
    if(e.target.src.includes('thumbnail1')){
        this.setState({vid: vid, display: 'block'})
    }
  }

  render() {
    return (
        <div className='imgsContainer'>
            <div className='bigImgContainer'>
                <Image src={this.state.vid}/>
                    <Div className='playCircle' style={{display: this.state.display}}>
                        <Div className='play1'/>
                        <Div className='play2'/>
                        <Div className='play3'/>
                    </Div>
            </div>
            <div className='thumbnailContainer'>
                <Image className='thumbnail' src={thumbnail1} onClick={this.imgChange.bind(this)}/>
                <Image className='thumbnail' src={thumbnail2} onClick={this.imgChange.bind(this)}/>
                <Image className='thumbnail' src={thumbnail3} onClick={this.imgChange.bind(this)}/>
                <Image className='thumbnail' src={thumbnail4} onClick={this.imgChange.bind(this)}/>
                <Image className='thumbnail' src={thumbnail5} onClick={this.imgChange.bind(this)}/>
                <Image className='thumbnail' src={thumbnail6} onClick={this.imgChange.bind(this)}/>
            </div>
         
        </div>
    );
  }
}

export default Gallery;
