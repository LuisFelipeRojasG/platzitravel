import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import lupa from '../assets/icons/lupa.svg';
import profile from '../assets/icons/profile.svg';
import ProfileMenu from './ProfileMenu';

function NavBar () {

    const [openProfile, setOpenProfile] = React.useState('hidden');
    const [mode, toggleMode] = useDarkMode();

    return (
        <nav className='hidden lg:w-full fixed top-0 z-10 lg:flex lg:justify-between dark:lg:bg-gray-800 lg:bg-white'>
            <div className=" relative lg:flex lg:w-full lg:h-[75px] justify-between py-6 text-xl font-bold">
                <div>
                    <a href="#home" className="pl-6 font-bold text-xl">Platzi Travel</a>
                </div>
                <div className="w-[475px] flex justify-between">
                    <a href="#recomendation" className="nav-link">Locations</a>
                    <a href="#trending" className="nav-link">Stays</a>
                    <a href="#faq" className="nav-link">FAQs</a>
                    <a href="#about" className="nav-link">About Us</a>
                </div>
                <div className="w-[140px] mr-[65px] flex justify-between">
                    <a href="#recomendation"><img className='mt-[5px] dark:fill-white' src={lupa} alt="Buscar" /></a>
                    <button 
                        aria-label="Toggle dark mode"
                        onClick={toggleMode}>
                            <img className='mt-[5px]' src={mode} alt="Mode" />
                    </button>
                    <button 
                        aria-label="Open profile menu"
                        onClick={() => {
                            if(openProfile === 'hidden') {
                                setOpenProfile('flex');
                            } else if (openProfile === 'flex') {
                                setOpenProfile('hidden');
                            }
                        }}>
                        <img src={profile} alt="Profile" />
                    </button>
                </div>
            </div>
            <div className={`absolute right-0 z-10 lg:mt-[75px] ${openProfile}`}>
                <ProfileMenu />
            </div>
        </nav>
    );
};

export default NavBar;