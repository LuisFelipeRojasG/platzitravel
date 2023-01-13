import twitter from '../assets/icons/twitter1.svg';
import instagram from '../assets/icons/instagram1.svg';

function About () {
    return (
        <div className="w-[335px] h-auto">
            <p className="h1">About Us</p>
            <div className="ml-7 text-left text-black">
                <a className="h2 block lg:text-xl" href="*">Investors</a>
                <a className="h2 block lg:text-xl" href="*">Jobs</a>
                <a className="h2 block lg:text-xl" href="*">Privacy Policy</a>
                <a className="h2 block lg:text-xl" href="*">Terms and Conditions</a>
                <a className="h2 block lg:text-xl" href="*">Platzi Travel, inc</a>
                <a className="h2 block lg:text-xl" href="*">Follow Us</a>
            </div>
            <div className='flex'>
                <a href="https://twitter.com/?lang=es">
                    <img className='ml-6' src={twitter} alt="" />
                </a>
                <a href="https://www.instagram.com/">
                    <img className='ml-6' src={instagram} alt="" />
                </a>
            </div>
        </div>
    );
};

export default About;