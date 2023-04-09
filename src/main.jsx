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
import Feature from './components/Features/Feature';
import JobDetails from './components/JobDetails/JobDetails';
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
        // errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home />,
                loader: ()=> fetch('jobCatagory.json'),
             
           
            },
            {
              path:'book/:id',
                element: <JobDetails />,
                loader: ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
                
            }
        
        
        ]
    
    }
    



  ])



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)


