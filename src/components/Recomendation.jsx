import data from "../data/cardData";
import LocationCard from "./LocationCard";

function Recomendation () {

    return (
        <div className="h-[290px]">
            <h1>Our Recomendations</h1>
            <div className="flex">
                {data.map((element, index) => (
                    <LocationCard 
                        image = {element.image}
                        city = {element.city}
                        message = {element.message}
                        key = {index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recomendation;