
const AppliedJob = ({ appliedJob }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = appliedJob;


    return (

        <div className="flex justify-between items-center border p-10 mt-6 rounded-lg">

            <div className="flex justify-between items-center gap-16">

                <div className="w-72 bg-[#F4F4F4] p-10 rounded-lg">
                    <img className="w-60" src={logo} alt="" />
                </div>

                <div>
                    <h2 className="text-[#474747] text-2xl font-bold">{job_title}</h2>
                    <p className="text-[#757575] text-xl font-medium">{company_name}</p>

                    <div className="flex items-center gap-4 my-2">

                        <button className="border px-2 py-1 text-[#7E90FE] border-[#9873FF] font-bold rounded-md">
                            <h4>{remote_or_onsite}</h4>
                        </button>

                        <button className="border px-2 py-1 text-[#7E90FE] border-[#9873FF] font-bold rounded-md">
                            <h4>{job_type}</h4>
                        </button>

                    </div>

                    <div className="flex items-center gap-6 mb-2">

                        <div className="flex items-center gap-1 text-[#757575] text-xl font-medium">
                            <span></span>
                            <h4>{location}</h4>
                        </div>

                        <div className="flex items-center gap-1 text-[#757575] text-xl font-medium">
                            <span></span>
                            <h4>{salary}</h4>
                        </div>

                    </div>

                </div>

            </div>

            <div>

                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg text-white text-lg font-semibold">
                    View Details
                </button>

            </div>

        </div>
    );
};

export default AppliedJob;