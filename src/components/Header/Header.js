import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <header className='header-section'>
            <img src={logo} alt="" />
            <h2>Cricket Skill Activity </h2>
            </header>
            <h3>Cricate Skill-up Practice </h3>
        </div>
    );
};

export default Header;