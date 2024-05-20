import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (

        <div className="text-center">
            <div className="text-center mt-12">
                <h2 className="text-[#1A1919] text-5xl font-bold">Featured Jobs</h2>
                <p className="text-[#757575] font-medium my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="md:grid md:grid-cols-2 gap-10 md:mt-10 mb-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>

            <div className={dataLength === jobs.length && "hidden"}>

                <button onClick={() => setDataLength(jobs.length)}
                className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg text-white text-lg font-semibold">
                    See All Jobs
                </button>

            </div>

        </div>
    );
};

export default FeaturedJobs;