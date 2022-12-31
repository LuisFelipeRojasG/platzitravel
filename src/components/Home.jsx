import sanFrancisco from '../assets/image/jpg/sanFrancisco.jpg'

function Home () {
    return (
        <div className='w-full h-3/4'>
             <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center'>
                <input className='outline-none p-3 rounded-full shadow-sm' type="search" placeholder='San Francisco' />
                <button className='text-xl text-blue-200'>Explorar</button>
            </div>
            <div className='w-full h-full'>
            <img src={sanFrancisco} alt="San Francisco" />
            </div>
        </div>
    );
};


export default Home;