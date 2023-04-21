import { useState } from 'react';
import Logo from '../assets/logoipsum-297.svg'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white max-h-screen h-20 w-screen fixed top-0 mx-auto max-w-screen-2xl z-50 box-border'>
      <nav className='flex items-center justify-between h-full px-6 md:px-16'>
        <div>
          <img className="w-2/4 md:w-3/4" src={Logo} alt="Logo" />
        </div>

        <div className="">
          <ul className="flex gap-4">
            <li className="hidden hover:opacity-80 lg:block"><a href="/">Inicio</a></li>
            <li className="hidden hover:opacity-80 lg:block"><a href="/sobre">Sobre</a></li>
            <li className="hidden hover:opacity-80 lg:block"><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="md:flex gap-6 ">
          <button className="hidden px-8 py-2 rounded-3xl border-2 hover:border-gray-300 lg:block ">Botão</button>
          <button className="hidden px-8 py-2 rounded-3xl bg-blue-400 text-white font-bold transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105  lg:block">CTA</button>

          <div className="lg:hidden block w-full">
            
            <button className="w-full" onClick={() => setIsOpen(!isOpen)}>{isOpen ? (
                <ion-icon size="large" name="close"></ion-icon>
              ) : (
                <ion-icon size="large" name="menu"></ion-icon>
              )}</button> 
          
              
          </div>

        </div>
      </nav>

      {isOpen && (
        <div className={`lg:hidden absolute 300 ease-in right-0 h-screen w-2/4 bg-white py-8 gap-3 flex items-center justify-start flex-col transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-4">
            <li className="hover:opacity-80 lg:hidden"><a href="/">Home</a></li>
            <li className="hover:opacity-80 lg:hidden"><a href="/sobre">Sobre</a></li>
            <li className="hover:opacity-80 lg:hidden"><a href="/contato">Contato</a></li>
          </ul>
          <div className="w-3/4 px-4">
            <button className="block w-full py-4 text-gray-800 hover:bg-gray-100 rounded-2xl">
            Botão
          </button>
          <button className="block w-full py-4 text-white bg-blue-400 rounded-3xl font-bold transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            CTA
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
