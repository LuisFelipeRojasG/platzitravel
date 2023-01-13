import { data } from "../data/cardData";
import LocationCard from "./LocationCard";

function Recomendation () {

    return (
        <div id="recomendation" className="flex flex-col relative h-[290px] lg:w-full lg:h-[350px]">
            <p className="h1">Our Recomendations</p>
            <div className="relative flex w-[940px] h-[205px] lg:h-[230px] lg:w-screen lg:mt-4">
                <div id="slider" className="flex w-[390px] h-full overflow-x-auto overscroll-x-contain lg:w-screen lg:justify-center">
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