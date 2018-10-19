import React from 'react';
import './navbar.css';
import OptionButton from '../general/button';
import search from '../Images/search.svg';
import SearchImage from '../general/img'
import Select from './select';
import UserPic from '../general/div';
import UserProfile from '../general/div';
import LogoImage from '../general/img';
import Icon from '../general/img';
import icon from '../Images/profileIcon.PNG';
import logo from '../Images/logo.PNG';


class Navbar extends React.Component {
    
    render() {
        return(
            <div className='base'>
                <LogoImage src={logo} className='logo'/>
                <SearchImage src={search} className='search'/>
                <OptionButton className='allcards'>ALL CARDS</OptionButton>
                <OptionButton>FUNDABLE</OptionButton>
                <OptionButton>FUNDED</OptionButton>
                <OptionButton>IN PRODUCTION</OptionButton>
                <OptionButton>IN REVIEW</OptionButton>
                <OptionButton>DELIVERED</OptionButton>
                <Select/>
                <UserProfile className='UserProfile'>200 <Icon className='icon' src={icon} /> <UserPic className='UserPic'/> </UserProfile>
            </div>
        )
    }
}

export default Navbar