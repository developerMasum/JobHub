import React from "react";

const JobCategory = ({ category }) => {
  const { name, freeVacancy, image } = category;
  // console.log(category);
  return (
  <div className="">
      <div className=" p-8 w-[75%] gap-6 bg-base-100 shadow-xl hover:border-sky-400">
      <div>
        <div className="w-16 ">
          <img src={image} alt="" />
        </div>
        <div className="font-semibold">
          <h2 className="">{name}</h2>
          <p>
            <small>{freeVacancy} Jobs Available</small>
          </p>
        </div>
      </div>
    </div>

{/* featured jobs */}






  </div>
    

    

  
  );
};

export default JobCategory;
