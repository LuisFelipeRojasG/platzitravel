import './tabBar.css';
import Home from './svg/Home';
import Lupa from './svg/Lupa';
import Heart from './svg/Heart';
import Profile from './svg/Profile';
import React from 'react';
import ProfileMenu from './ProfileMenu';


function TabBar () {

    const [activeTabBar, setActiveTabBar] = React.useState('#');
    const [openProfile, setOpenProfile] = React.useState('hidden');

    return (
        <div className='relative'>
            <nav className='grid grid-cols-4 justify-items-center content-center z-10 fixed bottom-2 mt-[35px] px-6 w-[350px] h-[75px] ml-5 bg-gray-300/90 lg:hidden rounded-full'>
                <a href="#home" onClick={() => setActiveTabBar('#')} className={`navItems ${activeTabBar === '#' ? 'activeLink' : 'noActiveLink'}`}>
                    <Home />
                </a>
                <a href="#recomendation" onClick={() => setActiveTabBar('#recomendation')} className={`navItems ${activeTabBar === '#recomendation' ? 'activeLink' : 'noActiveLink'}`}>
                    <Lupa 
                        ancho='30'
                        alto='30'
                        relleno={''}
                    />
                </a>
                <a href="#trending" onClick={() => setActiveTabBar('#trending')} className={`navItems ${activeTabBar === '#trending' ? 'activeLink' : 'noActiveLink'}`}>
                    <Heart />
                </a>
                <button className={`profile navItems ${activeTabBar === 'profile' ? 'activeLink' : 'noActiveLink'}`}    onClick={() => {
                        if(openProfile === 'hidden') {
                            setOpenProfile('flex');
                            setActiveTabBar('profile');
                        } else if (openProfile === 'flex') {
                            setOpenProfile('hidden');
                            setActiveTabBar('');
                        }
                    }}>
                    <Profile />
                </button>
                <div className={`absolute bottom-20 z-10  ${openProfile}`}>
                    <ProfileMenu />
                </div>
            </nav>
        </div>

        
    );
};

export default TabBar;