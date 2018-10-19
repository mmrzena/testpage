import React from 'react';
import Number from '../general/div';
import Name from '../general/div';
import './statistics.css';

export default ({children, ...props}) => {
    return (
        <div className='oneStatisticWrapper'>
            <Number className='number'>{props.number}</Number>
            <Name className='name'>{children}</Name>
        </div>
    )
}