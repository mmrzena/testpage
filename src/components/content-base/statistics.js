import React, { Component } from 'react';
import OneStatistic from './onestatistic';
import './statistics.css';

class Statistics extends Component {
    
    render() {
        return (
            <div className='statisticsWrapper'>
                <OneStatistic number='1 349 800'>TOKENS RAISED</OneStatistic>
                <OneStatistic number='1 467'>BACKERS</OneStatistic>
                <OneStatistic number='78'>DELIVERED</OneStatistic>
                <OneStatistic number='298'>COMMENTS</OneStatistic>
            </div>

        )
    }
}

export default Statistics;