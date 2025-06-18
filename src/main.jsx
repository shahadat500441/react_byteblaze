import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import MainLayouts from './assets/layouts/MainLayouts';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './pages/Blogs';
import Bookmarks from './pages/Bookmarks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
     children:[
     {
      path:"/",
      element:<Home></Home>
     },
     {
      path:"/blogs",
      element:<Blogs></Blogs>,
      loader:()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
     },
     {
      path:"/bookmarks",
      element:<Bookmarks></Bookmarks>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
