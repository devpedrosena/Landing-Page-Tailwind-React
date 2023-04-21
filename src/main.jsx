import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav';
import Home from './pages/Home';
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Error from './pages/Error';
import Footer from './components/Footer'
import FooterMob from './components/FooterMob'
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade'
import TermosDeUso from './pages/TermosDeUso';
import './Index.css'


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
  {
    path: "/politica-de-privacidade",
    element: <PoliticaDePrivacidade/>,
  },
  {
    path: "/termos-de-uso",
    element: <TermosDeUso/>,
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
