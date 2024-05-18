import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (

        <div>
            <div className="text-center mt-12">
                <h2 className="text-[#1A1919] text-5xl font-bold">Featured Jobs</h2>
                <p className="text-[#757575] font-medium my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>

        </div>
    );
};

export default FeaturedJobs;