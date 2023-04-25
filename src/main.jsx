import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import Home from './components/Home/Home';
// import Feature from './components/Features/Feature';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
// import AppliedJobs from './components/AppliedJobs/AppliedJobs';
// import About from './components/About';
// import Home from './components/Home/Home';
// import Books from './components/Books/Books';
// import BookDetails from './components/BookDetails/BookDetails';
// import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
// import ErrorPage from './components/ErrorPage/ErrorPage';
  const router =  createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        errorElement: <ErrorPage />,
        // errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home />,
                loader: ()=> fetch('jobCatagory.json'),
             
           
            },
            {
              path: 'details/:id',
              element: <JobDetails />,
              loader: ()=> fetch('featuredJobs.json'),

                
            },
            {
              path: 'blog',
              element:<Blog />
            }
        
        
        ]
    
    }
    



  ])



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)


