import React, { Component } from 'react';
import './card.css'
import Image from '../general/img';
import vid from '../Images/vid.png';
import Tag from '../general/button';
import fundable from '../Images/fundable.PNG';
import Statistics from './statistics';
import Text from '../general/div';
import Badge from './badge';
import Bar from './bar';


class Card extends Component {

    render() {
        return (
            <div className='card'>
               <Image className='image' src={vid}/>
               <Tag className='tag' >FUNDABLE <Image src={fundable} className='fundablePNG'/></Tag>
               <Text className='nameText'>
                    Adding 3 more rifles and one shotgun for each faction.
               </Text>

               <Text className='paragraphText'>
                    We plan to introduce new weapons for everyone involved in the conflict. The four new guns are great because they mesh well with the hyperbolic energy of shooting at gross-looking monsters, they make combat more harried and frenzied, but at the same time more tactically nuanced.
               </Text>

               <Bar/>

               <Statistics className='statisticsWrapper cardStatisticsWrapper'/>

               <Badge />
            </div>
        )
    }
}

export default Card;
