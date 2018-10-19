import React, { Component } from 'react';
import OneStatistic from '../content-base/onestatistic';
import './statistics.css';

class Statistics extends Component {
    
    render() {
        return (
            <div className={this.props.className}>
                <OneStatistic number='12 300'>TOKENS RAISED</OneStatistic>
                <OneStatistic number='12'>BACKERS</OneStatistic>
                <OneStatistic number='43'>DAYS LEFT</OneStatistic>
            </div>

        )
    }
}

export default Statistics;