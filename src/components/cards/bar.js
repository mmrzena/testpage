import React, { Component } from 'react';
import NumberSpan from '../general/span';
import NameSpan from '../general/span';
import PercentageSpan from '../general/span';
import BarGrey from '../general/span';
import BarBlue from '../general/span';


class Bar extends Component {

    render() {
        return (
            <div className='barDiv'>
                   <NumberSpan className='numberSpan'>20 000</NumberSpan>
                   <NameSpan className='nameSpan'>Tokens funding goal</NameSpan>
                   <PercentageSpan className='percentageSpan'>62%</PercentageSpan>
                   <BarGrey className='barGrey'></BarGrey>
                   <BarBlue className='barBlue'></BarBlue>
               
            </div>
        )
    }
}

export default Bar;
