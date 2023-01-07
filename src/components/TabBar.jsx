import home from '../assets/icons/home.svg'
import lupa from '../assets/icons/lupa.svg'
import heart from '../assets/icons/heart.svg'
import profile from '../assets/icons/profile.svg'

function TabBar () {
    return (
        <div className='flex justify-center mt-[35px] px-20 w-[390px] h-[72px] border-4 border-primary-100'>
            <a href="#home"><img className='pt-6 mx-6' src={home} alt="" /></a>
            <a href="#recomendation"><img className='pt-7 mx-6' src={lupa} alt="" /></a>
            <a href="#trending"><img className='pt-6 mx-6' src={heart} alt="" /></a>
            <a href="*"><img className='pt-6 mx-6' src={profile} alt="" /></a>
        </div>
    );
};

export default TabBar;