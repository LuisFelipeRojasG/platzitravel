import lupa from '../assets/icons/lupa.svg'
import luna from '../assets/icons/luna.svg'
import profile from '../assets/icons/profile.svg'

function NavBar () {
    return (
        <div className="hidden lg:flex lg:w-auto lg:h-[75px] justify-between py-6 text-xl font-bold">
            <div>
                <a className="pl-6">Platzi Travel</a>
            </div>
            <div className="w-[475px] flex justify-between">
                <a href="">Locations</a>
                <a href="">Stays</a>
                <a href="">FAQs</a>
                <a href="">About Us</a>
            </div>
            <div className="w-[140px] mr-[65px] flex justify-between">
                <a href="#recomendation"><img className='mt-[5px]' src={lupa} alt="" /></a>
                <a href="#trending"><img className='mt-[5px]' src={luna} alt="" /></a>
                <a href="*"><img src={profile} alt="" /></a>
            </div>
        </div>
    );
};

export default NavBar;