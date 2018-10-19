import React, { Component } from 'react';
import Image from '../general/img';
import BadgeSpan from '../general/span';
import BadgeButton from '../general/button';
import heart from '../Images/heart.PNG';
import messages from '../Images/messages.PNG';


class Badge extends Component {

    render() {
        return (
            <div className='badgeDiv'>
                   <BadgeSpan className='badge'> <Image src={heart} className='badgeImage'/></BadgeSpan>
                   <BadgeSpan className='badge'> <Image src={messages} className='badgeImage'/></BadgeSpan>
                   <BadgeButton className='pledge'>PLEDGE</BadgeButton>
            </div>
        )
    }
}

export default Badge;
