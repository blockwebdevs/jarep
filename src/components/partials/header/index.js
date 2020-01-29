import React from 'react';

import NavContainer from './nav-menu/navigation'
import UserSettingsContainer from './user-settings.js';

import './header.scss'

const Header = () => {
    
    return (
        <div className="headerHome">
            <header>
                <div className="headerBlock">
                    <NavContainer />
                    <UserSettingsContainer />
                </div>
            </header>
        </div>
    )
}

export default Header