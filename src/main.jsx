import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import React Router

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';

// Set react router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)






