import React, { Component } from 'react';
import LatestBuild from '../general/div';
import OlderBuilds from '../general/div';
import Build from './build';
import './builds.css';

class Builds extends Component {

    render() {
        return (
            <div className='buildsWrapper'>
                <LatestBuild className='latestBuilds'>Latest Build</LatestBuild>
                    <Build className='build' date='12.8.2018'>Orange Cast Installer v1018a2.exe</Build>
                <OlderBuilds className='olderBuilds'>OLDER BUILDS</OlderBuilds>    
                    <Build className='build'  date='22.7.2018'>Orange Cast Installer v1017b.exe</Build>
                    <Build className='build' date='6.6.2018'>Orange Cast Installer v1016.exe</Build>
                    <Build className='build' date='2.5.2018'>Orange Cast Installer v1015.exe</Build>
                    <Build className='build' date='9.4.2018'>Orange Cast Installer v1014.exe</Build>
                    <Build className='build' date='14.3.2018'>Orange Cast Installer v1013.exe</Build>
                    <Build className='build' date='7.2.2018'>Orange Cast Installer v1012.exe</Build>
                    <Build className='build' date='22.1.2018'>Orange Cast Installer v1011.exe</Build>
            </div>
            

        )
    }

}

export default Builds