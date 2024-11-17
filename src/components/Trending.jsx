import { trendingMobile } from '../data/cardData';
import { TrendingCard, ChicagoCard, LosAngelesCard, MiamiCard, BaliCard} from './TrendingCard';

function Trending () {
    return (
        <section id='trending' className='w-screen h-auto flex flex-col lg:w-auto'>
            <p className='h1 lg:mb-14'>Trending Stays</p>
            <section className='flex flex-col items-center lg:hidden'>
                {trendingMobile.map((element, index) => (
                    <TrendingCard 
                        image={element.image}
                        city={element.city}
                        message={element.message}
                        key={index}
                    />
                ))}
            </section>
            <article className='hidden w-auto h-full lg:grid lg:grid-rows-8 lg:grid-cols-8 gap-6 lg:mx-4 '>
                <ChicagoCard />
                <LosAngelesCard />
                <MiamiCard />
                <BaliCard />
            </article>
        </section>
    );
};

export default Trending;