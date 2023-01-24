import { trendingMobile } from '../data/cardData';
import { TrendingCard, ChicagoCard, LosAngelesCard, MiamiCard, BaliCard} from './TrendingCard';



function Trending () {
    return (
        <div id='trending' className='w-[390px] h-auto flex flex-col aling-center lg:w-screen'>
            <p className='h1 lg:mb-14'>Trending Stays</p>
            <div className='lg:hidden'>
                {trendingMobile.map((element, index) => (
                    <TrendingCard 
                        image={element.image}
                        city={element.city}
                        message={element.message}
                        hey={index}
                    />
                ))}
            </div>
            <div className='hidden w-auto h-full lg:grid lg:ml-4 lg:mr-4 lg:grid-cols-5 lg:grid-rows-7 gap-6'>
                <ChicagoCard />
                <LosAngelesCard />
                <MiamiCard />
                <BaliCard />
            </div>
        </div>
    );
};

export default Trending;