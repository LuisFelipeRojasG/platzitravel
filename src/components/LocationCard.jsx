import  './locationCard.css';

function LocationCard ({image, city, message, bgIndex}) {

    let bgColor;

        if((bgIndex%2)===0) {
            bgColor = true;
        } else {
            bgColor = false;
        }
    

    return (
        <article className={`container ${bgColor ? 'containerBackGreen' : 'containerBackWhite'} lg:transition-all lg:duration-500 lg:ease-out lg:hover:-translate-y-1 lg:hover:scale-110` }>
            <figure>
                <img className='w-full h-28 rounded-t-lg lg:h-52' src={image} alt={`${city}`} />
            </figure>
            <div>
                <h3 className='mt-2 ml-[10px] text-base lg:text-2xl'>{`${city}`}</h3>
                <p className='mt-0 ml-[10px] font-semibold text-m lg:text-xl dark:text-gray-300'>{`${message}`}</p>
            </div>
        </article>
    );
};

export default LocationCard;