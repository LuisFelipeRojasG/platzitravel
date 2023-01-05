import  './LocationCard.css';

function LocationCard ({image, city, message}) {
    return (
        <div className='containerWhite '>
            <div>
                <img className='h-28' src={image} alt="" />
            </div>
            <div>
                <h3>{`${city}`}</h3>
                <p>{`${message}`}</p>
            </div>
        </div>
    );
};

export default LocationCard;