import { trendingDesktop } from '../data/cardData';

function TrendingCard ({image, city, message}) {
    return (
        <article className="flex relative w-[336px] h-[405px] mb-10">
            <img className="absolute rounded-3xl" src={image} alt={`${city}`} />
            <header>
                <h3 className='absolute mt-12 ml-6 text-white font-Montserrat font-extrabold text-[25px]'>{`${city}`}</h3>
                <p className='text-left text-white font-Montserrat font-[500] text-base'>{`${message}`}</p>
            </header>
        </article>
    );
};

function ChicagoCard () {
    return (
        <article className="lg:row-start-1 lg:row-end-5 lg:col-span-8 lg:relative">
            <img className=" w-full rounded-[55px]" src={trendingDesktop[0].image} alt="Chicago" />
            <header className='absolute top-0 right-0 text-right w-auto h-auto mt-8 pr-10'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px]'>{`${trendingDesktop[0].city}`}</h3>
                <p className=' text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[0].message}`}</p>
            </header>
        </article>
    );
};

function LosAngelesCard () {
    return (
        <article className="lg:row-start-5 lg:row-span-4 lg:col-span-4 lg:relative rounded-3xl">
            <img className="w-full rounded-[55px]" src={trendingDesktop[1].image} alt="Los Angeles" />
            <header className='absolute top-0 right-0 text-right w-auto h-auto mt-8 pr-10'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px]'>{`${trendingDesktop[1].city}`}</h3>
                <p className=' text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[1].message}`}</p>
            </header>
        </article>
    );
};

function MiamiCard () {
    return (
        <article className="lg:row-start-5 lg:row-span-2 lg:col-span-4 lg:relative">
            <img className="w-full rounded-[55px]" src={trendingDesktop[2].image} alt="Miami" />
            <header className='absolute top-0 right-0 text-right w-auto h-auto mt-8 pr-10'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px]'>{`${trendingDesktop[2].city}`}</h3>
                <p className=' text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[2].message}`}</p>
            </header>
        </article>
    );
};

function BaliCard () {
    return (
        <article className=" lg:row-span-2 lg:col-span-4 lg:relative">
            <img className="w-full rounded-[55px]" src={trendingDesktop[3].image} alt="Bali" />
            <header className='absolute top-0 right-0 text-right w-auto h-auto mt-8 pr-10'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px]'>{`${trendingDesktop[3].city}`}</h3>
                <p className=' text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[3].message}`}</p>
            </header>
        </article>
    );
};

export { TrendingCard, ChicagoCard, LosAngelesCard, MiamiCard, BaliCard } ;