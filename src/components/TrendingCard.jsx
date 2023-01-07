
function TrendingCard ({image, city, message}) {
    return (
        <div className="flex relative w-[336px] h-[405px] ml-[27px] mb-10 ">
            <div>
                <img className="absolute rounded-2xl" src={image} alt="" />
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

export default TrendingCard;