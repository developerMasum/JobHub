import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Applied = ({ single }) => {
  const {
    id,
    contact,
    experiences,
    educationalRequirements,
    jobResponsibility,
    description,
    salary,
    fulltimeOrPartTime,
    location,
    remoteOrOnsite,
    companyName,
    jobTitle,
    companyLogo,
  } = single;
  return (
    <>
      <section className="flex justify-around px-6 py-4  items-center w-[50%] mx-auto  m-12  bg-base-100 shadow-xl hover:border-sky-900">
        <div className=" h-30 w-32">
          <div className="  w-full ">
            <img
              className="object-cover rounded-lg "
              src={companyLogo}
              alt=""
            />
          </div>
        </div>
        <div className="mt-0">
          <h2 className="font-bold text-lg mb-2">{jobTitle}</h2>
          <h3 className="font-semibold text-gray-600 mb-2">{companyName}</h3>
          <div className="flex gap-3">
            {" "}
            <button className=" rounded btn-outline px-2 py-2 btn btn-sm btn-primary">
              {remoteOrOnsite}
            </button>
            <button className=" rounded btn-outline btn btn-sm btn-error">
              {fulltimeOrPartTime}
            </button>{" "}
          </div>

          <div className="flex  mt-3">
            <MapPinIcon className="w-6  text-blue-600"></MapPinIcon>
            <p className="mr-6">{location}</p>
            <CurrencyDollarIcon className="w-6 text-blue-950" />{" "}
            <p> Salary: {salary}</p>
          </div>
        </div>
        <div>
          <button className="px-2 py-2 text-white rounded font-semibold bg-blue-400">
            View Details
          </button>
        </div>
      </section>
    </>
  );
};

export default Applied;
