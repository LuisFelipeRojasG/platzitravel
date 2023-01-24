import { trendingDesktop } from '../data/cardData';

function TrendingCard ({image, city, message}) {
    return (
        <div className="flex relative w-[336px] h-[405px] ml-[27px] mb-10">
            <div>
                <img className="absolute rounded-3xl" src={image} alt="" />
            </div>
            <div>
                <h3 className='absolute mt-12 ml-6 text-white font-Montserrat font-extrabold text-[25px]'>{`${city}`}</h3>
                <div className="absolute w-[175px] mt-[110px] ml-6">
                    <p className='text-left text-white font-Montserrat font-[500] text-base'>{`${message}`}</p>
                </div>
            </div>
        </div>
    );
};

function ChicagoCard () {
    return (
        <div className="lg:w-[1314px] lg:h-[654px] row-span-3 col-span-5 ">
            <div>
                <img className="absolute rounded-3xl" src={trendingDesktop[0].image} alt="" />
            </div>
            <div className='absolute w-auto h-auto mt-8'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px] ml-[1090px]'>{`${trendingDesktop[0].city}`}</h3>
                <div className="absolute w-[375px] ml-[870px]">
                    <p className='text-right text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[0].message}`}</p>
                </div>
            </div>
        </div>
    );
};

function LosAngelesCard () {
    return (
        <div className="w-[512px] h-[832px] row-span-4 col-span-2">
            <div>
                <img className="absolute rounded-3xl" src={trendingDesktop[1].image} alt="" />
            </div>
            <div className='absolute w-auto h-auto mt-8'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px] ml-[230px]'>{`${trendingDesktop[1].city}`}</h3>
                <div className="absolute w-[250px] ml-[215px]">
                    <p className='text-right text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[1].message}`}</p>
                </div>
            </div>
        </div>
    );
};

function MiamiCard () {
    return (
        <div className="w-[772px] h-[403px] row-span-2 col-span-3">
            <div>
                <img className="absolute rounded-3xl" src={trendingDesktop[2].image} alt="" />
            </div>
            <div className='absolute w-auto h-auto mt-8'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px] ml-[600px]'>{`${trendingDesktop[2].city}`}</h3>
                <div className="absolute w-[360px] ml-[350px]">
                    <p className='text-right text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[2].message}`}</p>
                </div>
            </div>
        </div>
    );
};

function BaliCard () {
    return (
        <div className="w-[772px] h-[403px] row-span-2 col-span-3">
            <div>
                <img className="absolute rounded-3xl" src={trendingDesktop[3].image} alt="" />
            </div>
            <div className='absolute w-auto h-auto mt-12'>
                <h3 className='text-white font-Montserrat font-extrabold text-[35px] ml-[630px]'>{`${trendingDesktop[3].city}`}</h3>
                <div className="absolute w-[300px] ml-[410px]">
                    <p className='text-right text-white font-Montserrat font-[500] text-2xl'>{`${trendingDesktop[3].message}`}</p>
                </div>
            </div>
        </div>
    );
};

export { TrendingCard, ChicagoCard, LosAngelesCard, MiamiCard, BaliCard } ;