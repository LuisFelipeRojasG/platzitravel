import { data } from "../data/cardData";
import LocationCard from "./LocationCard";

function Recomendation () {

    return (
        <div id="recomendation" className="flex flex-col relative h-[290px] lg:w-auto lg:h-[650px]">
            <p className="h1 lg:mb-0">Our Recomendations</p>
            <div className="relative flex w-[940px] h-[205px] lg:h-[500px] lg:w-auto lg:mt-4 lg:ml-4 lg:mr-6">
                <div id="slider" className="flex w-[390px] h-full lg:h-[470px] lg:w-[2500px] lg:mt-6 overflow-x-auto overscroll-x-contain lg:items-center lg:pl-3">
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