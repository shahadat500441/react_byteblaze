import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import MainLayouts from './assets/layouts/MainLayouts';



import {
  RouterProvider,
} from "react-router-dom";

import Blogs from './pages/Blogs';
import Bookmarks from './pages/Bookmarks';
import Blog from './pages/Blog';

import { router } from './routes/Routes';




createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
