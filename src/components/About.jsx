import twitter from '../assets/icons/twitter1.svg';
import instagram from '../assets/icons/instagram1.svg';

function About () {
    return (
        <div id='about' className="w-[335px] h-auto lg:mb-14 lg:mt-16">
            <p className="h1">About Us</p>
            <div className="ml-7 text-left text-black dark:text-gray-300">
                <button type="button" className="h2 block lg:text-xl">Investors</button>
                <button type="button" className="h2 block lg:text-xl">Jobs</button>
                <button type="button" className="h2 block lg:text-xl">Privacy Policy</button>
                <button type="button" className="h2 block lg:text-xl">Terms and Conditions</button>
                <button type="button" className="h2 block lg:text-xl">Platzi Travel, inc</button>
                <button type="button" className="h2 block lg:text-xl">Follow Us</button>
            </div>
            <div className='flex'>
                <a href="https://twitter.com/?lang=es" aria-label="Twitter">
                    <img className='ml-6' src={twitter} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/" aria-label="Instagram">
                    <img className='ml-6' src={instagram} alt="Instagram" />
                </a>
            </div>
        </div>
    );
};

export default About;