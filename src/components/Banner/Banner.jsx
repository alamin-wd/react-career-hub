

const Banner = () => {

    return (
        <div className='w-full md:min-h-screen flex flex-col-reverse md:flex-row md:items-center bg-[#F9F9FF] p-6 md:px-10 rounded-xl'>

            <div className='md:w-1/2 md:px-10 text-center md:text-left'>
                <h1 className="text-[#1A1919] text-4xl md:text-7xl font-bold mt-2">
                    One Step Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span> </h1>

                <p className="text-[#757575] my-4 font-medium" >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] my-3 px-4 py-3 rounded-lg text-white text-lg font-semibold">
                    Get Started
                </button>
            </div>

            <div>
                <img className="w-3/4 mx-auto" src="https://i.ibb.co/GTjVkD1/hardy.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;