import React from 'react';
import sanFrancisco from '../assets/image/jpg/sanFrancisco.jpg';
import Lupa from '../components/svg/Lupa';
import luna from '../assets/icons/luna.svg';
import sol from '../assets/icons/sol.svg';
import sanFranciscoDesktop from '../assets/image/jpg/sanFranciscoDesktop.jpg'

function Home () {

    const htmlElement = document.querySelector("html");
    const [mode, setMode] = React.useState(luna);

    return (
        <div id='home' className='relative w-full h-[487px] lg:h-[600px] overflow-hidden'>
            <div className='absolute top-0 w-auto'>
                <img className='lg:hidden' src={sanFrancisco} alt="San Francisco" />
                <img src={sanFranciscoDesktop} alt="San Francisco" />
            </div>
            <div className='relative w-full h-full flex flex-col  items-center'>
                <button className='absolute flex justify-center items-center top-[21px] right-6 w-14 h-8 bg-white rounded-full lg:hidden' 
                     onClick={() => {
                        if(htmlElement.classList.contains('dark')) {
                            htmlElement.classList.remove('dark')
                            setMode(luna)
                        } else {
                            htmlElement.classList.add('dark')
                            setMode(sol)
                        }
                    }}>
                        <img src={mode} alt="Mode" />
                </button>
                <input className='absolute top-[73px] w-[344px] outline-none p-3 rounded-full drop-shadow-3xl text-center text-fblack font-Montserrat transition duration-300 focus-within:shadow-sm focus:ring focus:ring-primary lg:hidden' type="search" placeholder='San Francisco' />
                <div className='absolute top-[85px] left-[110px] lg:hidden'>
                    <Lupa 
                        ancho='20'
                        alto='20'
                        relleno={'#CC2D4A'}
                    />
                </div>
                <div className='hidden absolute w-96 top-[160px] left-20 font-bold text-4xl text-black text-left lg:flex'>
                    <p>Find More Locations like this</p>
                </div>
                <button className='absolute top-[386px] w-[191px] h-12 rounded-full bg-white text-sm text-primary font-Montserrat font-semibold lg:top-[270px] lg:left-20 lg:transition-all lg:duration-500 lg:ease-out lg:hover:bg-primary lg:hover:text-white lg:hover:-translate-y-1 lg:hover:scale-110 dark:text-black' >Explore More</button>
            </div>
        </div>
    );
};


export default Home;