import React from 'react';
import Build from '../general/div';
import BuildWrapper from '../general/div';
import downloadTagBuild from '../Images/downloadTagBuild.svg';
import Image from '../general/img';
import './builds.css';

export default ({children, date, ...props}) => {
    return (
        <BuildWrapper className='buildWrapper'>
            <Build {...props}>
                {children}
                <Image src={downloadTagBuild} className='downloadTagBuild' />
            </Build>
            <span className='dateSpan'>{date}</span>
        </BuildWrapper>
    )
}