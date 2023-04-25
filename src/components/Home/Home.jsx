import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import reader from "../../assets/hiring.json";
// import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";
import Feature from "../Features/Feature";

const Home = () => {
  const categories = useLoaderData(); 
//   const features = useLoaderData();
//   console.log(feature);
  // console.log(categories);

 

  const [features,setFeatures] = useState([]);



  useEffect(()=>{
    fetch('featuredJobs.json')
    .then(res=>res.json())
    .then(data=>setFeatures(data))
  },[])





  return (
    <section>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              One Step <br />
              Closer To Your <br />
              <span className="inline-block text-blue-400"> Dream Job</span>
              {/* A reader lives a <br className='hidden md:block' /> thousand lives{' '}
            <span className='inline-block text-blue-400'>before he dies</span> */}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. <br /> Manage all your
              job application from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/books" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
            {/* <Link
            to='/about'
            className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
          >
            Learn More
          </Link> */}
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
      {/* job catagory list  */}

      <div className="my-container">
        <div className="text-center ">
          <h3 className="text-3xl font-semibold">Job Category List</h3>
          <p>
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </small>
          </p>
        </div>

        <div className="mt-3">
          <div className="grid ms-5 p-5 gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">

           { categories.map(c=>console.log(c)) }


            {/* {categories.map((category) => (
              <JobCategory key={category.id} category={category}>
               
              </JobCategory>
            ))} */}
          </div>
        </div>
      </div>
      {/* featured job */}

      <div>
        <div className="text-center">
          <h2 className="font-bold text-3xl"> Featured Jobs</h2>
          <p>
            <small>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </small>
          </p>
        </div>
      </div>

    <div className="grid ms-8 p-5 gap-3 mb-8 lg:grid-cols-2 sm:grid-cols-2">
    {
        features.map(feature => <Feature
        key = 
        {feature.id}
        feature = {feature}


        ></Feature>)


    }



</div>
<div className="flex justify-center mb-5">
         <button  className='px-3 py-2 mt-3 bg-blue-300 rounded-md '> See More </button>
       </div>

    </section>
  );
};

export default Home;
