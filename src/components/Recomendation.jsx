import { data } from "../data/cardData";
import LocationCard from "./LocationCard";

function Recomendation () {

    return (
        <div className="flex flex-col relative h-[290px]">
            <p className="h1">Our Recomendations</p>
            <div className="relative flex w-[940px] h-[205px] ">
                <div id="slider" className="flex w-[390px] h-full overflow-x-auto overscroll-x-contain">
                    {data.map((element, index) => (
                        <LocationCard 
                            image = {element.image}
                            city = {element.city}
                            message = {element.message}
                            bgIndex = {index}
                            key = {index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recomendation;