
const JobCategory = ({ jobCategory }) => {

    const { id, logo, category_name, availability } = jobCategory;

    return (

        <div className="md:w-72 bg-gradient-to-r from-[#e1dbf0] to-[#d6ccf1] text-center md:text-left mt-6 p-10 rounded-xl ">

            <div className="w-20 bg-gradient-to-r from-[#d0cce6] to-[#bbb1d6] mb-6 p-4 rounded-xl mx-auto md:mx-0">
                <img src={logo} alt="" />
            </div>

            <div>
                <h3 className="text-[#474747] text-xl font-bold">{category_name}</h3>
                <p className="text-[#A3A3A3] font-medium mt-2">{availability}</p>
            </div>

        </div>
    );
};

export default JobCategory;