import profile from '../assets/icons/profile.svg'

function Profile () {
    return (
        <div className="relative flex w-[250px] h-[400px] bg-slate-200 text-center text-primary">
            <img className='w-[100px] h-[100px] mt-6 ml-[75px] bg-white rounded-full p-3' src={profile} alt="" />
            <div className='absolute w-full h-auto mt-[140px] pb-5'>
                <h1 className='pb-4 text-2xl text-center font-semibold'>User Name</h1>
                <p className='pb-2 text-xl'>Reservations</p>
                <p className='pb-2 text-xl'>Notifications</p>
                <p className='pb-2 text-xl'>Account</p>
            </div>
            <button className='absolute w-[150px] h-10 mt-[310px] ml-[50px] rounded-xl bg-white font-semibold'>Sign Out</button>
        </div>
    );
};

export default Profile;