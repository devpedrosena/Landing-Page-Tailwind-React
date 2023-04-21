import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav';
import Home from './pages/Home';
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Error from './pages/Error';
import './Index.css'
import Footer from './components/Footer'
import FooterMob from './components/FooterMob'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/contato",
    element: <Contato/>,
  },
  {
    path: "/sobre",
    element: <Sobre/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  <div className=" bg-BgColor box-border">
    <Nav/>
    <RouterProvider router={router} />
    <Footer/>
    <FooterMob/>
  </div>
  </React.StrictMode>,
)
