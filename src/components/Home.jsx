import sanFrancisco from '../assets/image/jpg/sanFrancisco.jpg';
import Luna from '../components/svg/Luna';
import Lupa from '../components/svg/Lupa';

function Home () {
    return (
        <div id='home' className='relative w-full h-[487px] overflow-hidden'>
            <div className='absolute top-0 w-full h-full'>
            <img src={sanFrancisco} alt="San Francisco" />
            </div>
            <div className='relative w-full h-full flex flex-col  items-center'>
                <button className='absolute top-[21px] right-6 w-14 h-8 bg-white rounded-full'></button>
                <div className='absolute top-[28px] right-11'>
                    <Luna  />
                </div>
                <input className='absolute top-[73px] w-[344px] outline-none p-3 rounded-full drop-shadow-3xl text-center text-fblack font-Montserrat transition duration-300 focus-within:shadow-sm focus:right-2 focus:w-11/12' type="search" placeholder='San Francisco' />
                <div className='absolute top-[87px] left-[114px]'>
                    <Lupa />
                </div>
                <button className='absolute top-[386px] w-[191px] h-12 rounded-full bg-white text-sm text-primary font-Montserrat font-semibold
                transition-all duration-500 ease-out hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110'>Explore More</button>
            </div>
        </div>
    );
};


export default Home;