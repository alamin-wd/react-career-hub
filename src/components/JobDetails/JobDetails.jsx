import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiSubtitlesBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);

    const {job_title, salary, contact_information, job_description, job_responsibility, educational_requirements, experiences} = job;

    return (
        <div className="mt-10">

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md: col-span-2">

                    <div className="mb-6">
                        <p className="space-x-1">
                            <span className="text-[#1A1919] font-semibold">Job Description:</span>
                            <span className="text-[#757575]">{job_description}</span>
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="space-x-1">
                            <span className="text-[#1A1919] font-semibold">Job Responsibility:</span>
                            <span className="text-[#757575]">{job_responsibility}</span>
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="space-x-1">
                            <span className="text-[#1A1919] font-semibold">Educational Requirements:</span>
                            <span className="text-[#757575]">{educational_requirements}</span>
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="space-x-1">
                            <span className="text-[#1A1919] font-semibold">Experiences:</span>
                            <span className="text-[#757575]">{experiences}</span>
                        </p>
                    </div>

                </div>

                <div>
                    <div className="bg-gradient-to-r from-[#dfdfe2] to-[#d6ceee]  rounded-lg p-5">

                        <div>
                            <h3 className="text-[#1A1919] text-xl font-bold">Job Details</h3>
                            <hr className="my-4 text-[#7E90FE]" />

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#7E90FE]"><AiOutlineDollarCircle /></span>
                                    <span className="text-[#474747] text-xl font-semibold">Salary:</span>
                                    <span className="text-[#757575] text-lg font-medium">{salary}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-[#7E90FE]"><PiSubtitlesBold /></span>
                                    <span className="text-[#474747] text-xl font-semibold">Job Title:</span>
                                    <span className="text-[#757575] text-lg font-medium">{job_title}</span>
                                </div>
                            </div>

                        </div>

                        <div className="mt-6">
                            <h3 className="text-[#1A1919] text-xl font-bold">Contact Information</h3>

                            <hr className="my-4 text-[#7E90FE]" />

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#7E90FE]"><FiPhone /></span>
                                    <span className="text-[#474747] text-xl font-semibold">Phone:</span>
                                    <span className="text-[#757575] text-lg font-medium">{contact_information.phone}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-[#7E90FE]"><MdOutlineEmail />
                                    </span>
                                    <span className="text-[#474747] text-xl font-semibold">Email:</span>
                                    <span className="text-[#757575] text-lg font-medium">{contact_information.email}</span>
                                </div>

                                <div className="flex items-baseline gap-2">
                                    <span className="text-[#7E90FE]"><IoLocationOutline /></span>
                                    <span className="text-[#474747] text-xl font-semibold">Address:</span>
                                    <span className="text-[#757575] text-lg font-medium">{contact_information.address}</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg text-white text-lg font-semibold">
                            Apply Now
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default JobDetails;