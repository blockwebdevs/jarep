import React from 'react';

import Nav from './nav-menu/navigation'
import { Auth } from '../../modal'
import UserSettingsContainer from './user-settings.js';

const Header = () => {
    return (
        <div className="headerHome">
            <header>
                <Auth />
                <div className="headerBlock">
                    <Nav />
                    <UserSettingsContainer />
                </div>
            </header>
        </div>
    )
}

export default Header