import  './LocationCard.css';

function LocationCard ({image, city, message, bgIndex}) {

    let bgColor;
     

        if((bgIndex%2)===0) {
            bgColor = true;
        } else {
            bgColor = false;
        }
    

    return (
        <div className={`container ${bgColor ? 'containerBackGreen' : 'containerBackWhite'}`}>
            <div>
                <img className='h-28 rounded-t-lg' src={image} alt="" />
            </div>
            <div>
                <h3 className='mt-3 ml-[10px]'>{`${city}`}</h3>
                <p className='mt-0 ml-[10px] font-semibold text-[9px]'>{`${message}`}</p>
            </div>
        </div>
    );
};

export default LocationCard;