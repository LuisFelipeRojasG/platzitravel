import { trending } from '../data/cardData';
import TrendingCard from './TrendingCard';


function Trending () {
    return (
        <div id='trending' className='w-[390px] h-auto flex flex-col aling-center'>
            <p className='h1'>Trending Stays</p>
            <div className=''>
                {trending.map((element, index) => (
                    <TrendingCard 
                        image={element.image}
                        city={element.city}
                        message={element.message}
                        hey={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Trending;