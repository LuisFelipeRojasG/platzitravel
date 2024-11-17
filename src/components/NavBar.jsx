import React from 'react';
import lupa from '../assets/icons/lupa.svg';
import luna from '../assets/icons/luna.svg';
import sol from '../assets/icons/sol.svg';
import profile from '../assets/icons/profile.svg';
import ProfileMenu from './ProfileMenu';

function NavBar () {

    const [openProfile, setOpenProfile] = React.useState('hidden');
    const htmlElement = document.querySelector("html");
    const [mode, setMode] = React.useState(luna);

    return (
        <nav className='hidden lg:w-full fixed top-0 z-10 lg:flex lg:justify-between dark:lg:bg-gray-800 lg:bg-white'>
            <div className=" relative lg:flex lg:w-full lg:h-[75px] justify-between py-6 text-xl font-bold">
                <div>
                    <a href="*" className="pl-6">Platzi Travel</a>
                </div>
                <div className="w-[475px] flex justify-between">
                    <a href="#recomendation">Locations</a>
                    <a href="#trending">Stays</a>
                    <a href="#faq">FAQs</a>
                    <a href="#about">About Us</a>
                </div>
                <div className="w-[140px] mr-[65px] flex justify-between">
                    <a href="#recomendation"><img className='mt-[5px] dark:fill-white' src={lupa} alt="Buscar" /></a>
                    <button 
                        onClick={() => {
                            if(htmlElement.classList.contains('dark')) {
                                htmlElement.classList.remove('dark')
                                setMode(luna)
                            } else {
                                htmlElement.classList.add('dark')
                                setMode(sol)
                            }
                        }}>
                            <img className='mt-[5px]' src={mode} alt="Mode" />
                    </button>
                    <button 
                        onClick={() => {
                            if(openProfile === 'hidden') {
                                setOpenProfile('flex');
                            } else if (openProfile === 'flex') {
                                setOpenProfile('hidden');
                            }
                        }}>
                        <img src={profile} alt="" />
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