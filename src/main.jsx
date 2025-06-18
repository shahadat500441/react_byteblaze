import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";



import { router } from './routes/Routes';




createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </>,
)
