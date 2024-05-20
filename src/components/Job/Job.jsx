import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;

    return (

        <div className="card border-2 rounded-xl shadow-xl p-10 mt-4 md:mt-0 text-left">

            <div className="mx-6 px-2">
                <img className="w-48" src={logo} alt="" />
            </div>

            <div className="card-body">

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
                        <span><IoLocationOutline /></span>
                        <h4>{location}</h4>
                    </div>

                    <div className="flex items-center gap-1 text-[#757575] text-xl font-medium">
                        <span><AiOutlineDollar /></span>
                        <h4>{salary}</h4>
                    </div>
                </div>

                <div>
                    <Link to={`/job/${id}`}>
                        <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg text-white text-lg font-semibold">
                            View Details
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Job;