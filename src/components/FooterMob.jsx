import React, { useState } from 'react'
import Logo from '../assets/logoipsum-297.svg'


function Footer() {
  return (
    <div className="flex flex-col w-full h-800 px-2 bg-white justify-center gap-16 lg:hidden">
        <div className="flex flex-col gap-10">
            <div className="w-2/4 px-6">
                <img className="w-32" src={Logo} alt="" />
            </div>
            <div className='flex flex-col gap-8 items-center justify-center'>
                <p className="flex items-start justify-start w-full pl-6">Atualizações diretamente no seu email</p>
                <div className="w-[90%] flex items-center justify-center">
                   <form className="flex gap-6 w-full flex-col">
                     <input className=" border-slate-200 w-90 border-2 p-2 rounded-lg" required type="email" placeholder='Insira seu Email' />
                    <button className="bg-blue-400 text-white px-8 py-2 rounded-2xl">Inscrever-se</button>
                   </form>
                </div>
            </div>
        </div>
        <div className="flex items-center  gap-14 w-full flex-col">
            <div className="flex items-start justify-center gap-14 w-full flex-col">
            
            <div className="flex flex-col items-center gap-2 px-6">
                <ul>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                </ul>
            </div>
            </div>
            <div className="flex gap-6 flex-col items-start justify-center w-full px-4"> 
                    <a className="font-bold" href="/politica-de-privacidade">Politica de privacidade</a>
                    <a className="font-bold" href="/termos-de-uso">Termos de uso</a>
                    <p className="font-bold cursor-pointer ">©Xperience 2023</p>
                </div>
            <div className="flex justify-start items-end w-full h-full px-6">
                <div className="flex gap-4 items-center justify-center">
                    <i className="fa-brands fa-instagram fa-lg cursor-pointer hover:opacity-80"></i>
                    <i className="fa-brands fa-facebook fa-lg cursor-pointer hover:opacity-80"></i>
                    <i className="fa-brands fa-whatsapp fa-lg cursor-pointer hover:opacity-80"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer