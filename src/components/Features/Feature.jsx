import { CogIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {

   const {contact,experiences,educationalRequirements,jobResponsibility,description,salary,fulltimeOrPartTime,location,remoteOrOnsite,companyName,jobTitle,companyLogo} = feature;
    console.log(feature);
    return (
        <div className="p-12">
        <div className=" p-3 ps-3 w-[98%] gap-6 bg-base-100 shadow-xl hover:border-sky-400">
        <div>
         <div className=' relative h-32 w-32'>
         <div className="absolute left-0 top-0 h-18 w-18 ">
            <img src={companyLogo} alt="" />
          </div>
         </div>
          <div className="">
            <h2 className="font-semibold">{jobTitle}</h2>
            <p className=' text-gray-500 mb-2'>{companyName}</p>
            <button className=" px-3  rounded-lg btn-warning">{fulltimeOrPartTime}</button>

            <div className="flex gap-3">
              <MapPinIcon className='w-6 text-blue-600'></MapPinIcon><p>{location}</p>
              
               <CurrencyDollarIcon className='w-6 text-blue-950' />  <p> Salary: {salary}</p>
            </div>

           
          </div>
        </div>
       <div>
         <button className='px-3 py-2 mt-3 bg-blue-300 rounded-md '> View Details </button>
       </div>
      </div>
  
  {/* featured jobs */}
  
  
  
  
  
    </div>
    );
};

export default Feature;