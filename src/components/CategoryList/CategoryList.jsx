import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const CategoryList = () => {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoryList(data));
    }, [])

    return (
        <div>

            <div className="text-center mt-12">
                <h2 className="text-[#1A1919] text-5xl font-bold">Job Category List</h2>
                <p className="text-[#757575] font-medium my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className=" md:flex md:justify-between md:items-center gap-6 my-6">
                {
                    categoryList.map(jobCategory => <JobCategory
                        key={jobCategory.id}
                        jobCategory={jobCategory}
                    ></JobCategory>)
                }
            </div>

        </div>
    );
};

export default CategoryList;