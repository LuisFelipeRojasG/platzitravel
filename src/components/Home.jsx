import sanFrancisco from '../assets/image/jpg/sanFrancisco.jpg';
import Luna from '../components/svg/Luna';
import Lupa from '../components/svg/Lupa';
import sanFranciscoDesktop from '../assets/image/jpg/sanFranciscoDesktop.jpg'

function Home () {

    return (
        <div id='home' className='relative w-full h-[487px] lg:h-[600px] overflow-hidden'>
            <div className='absolute top-0 w-auto'>
                <img className='lg:hidden' src={sanFrancisco} alt="San Francisco" />
                <img src={sanFranciscoDesktop} alt="San Francisco" />
            </div>
            <div className='relative w-full h-full flex flex-col  items-center'>
                <button className='absolute top-[21px] right-6 w-14 h-8 bg-white rounded-full lg:hidden'></button>
                <div className='absolute top-[28px] right-11 lg:hidden'>
                    <Luna  />
                </div>
                <input className='absolute top-[73px] w-[344px] outline-none p-3 rounded-full drop-shadow-3xl text-center text-fblack font-Montserrat transition duration-300 focus-within:shadow-sm focus:right-2 focus:w-11/12 lg:hidden' type="search" placeholder='San Francisco' />
                <div className='absolute top-[87px] left-[114px] lg:hidden'>
                    <Lupa />
                </div>
                <div className='hidden absolute w-96 top-[160px] left-20 font-bold text-4xl text-black text-left lg:flex'>
                    <p>Find More Locations like this</p>
                </div>
                <button className='absolute top-[386px] w-[191px] h-12 rounded-full bg-white text-sm text-primary font-Montserrat font-semibold lg:top-[270px] lg:left-20 transition-all duration-500 ease-out hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110' >Explore More</button>
            </div>
        </div>
    );
};


export default Home;