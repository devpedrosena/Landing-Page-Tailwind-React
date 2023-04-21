import React, { useState } from 'react'
import Logo from '../assets/logoipsum-297.svg'


function Footer() {
  return (
    <div className="hidden w-full h-96 p-20 bg-white lg:flex justify-around">
        <div className="flex flex-col gap-24">
            <div className="w-2/4">
                <img className="w-32" src={Logo} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <p>Atualizações diretamente no seu email</p>
                <div >
                   <form className="flex gap-4">
                     <input className=" border-slate-200 w-60 border-2 p-2 rounded-lg" required type="email" placeholder='Insira seu Email' />
                    <button className="bg-blue-400 text-white px-8 py-3 rounded-2xl">Inscrever-se</button>
                   </form>
                </div>
                <div className="flex gap-6">
                    <p className="font-bold cursor-pointer">© Xperience 2023</p>
                    <a className="font-bold" href="/politica-de-privacidade">Politica de privacidade</a>
                    <a className="font-bold" href="/termos-de-uso">Termos de uso</a>
                </div>
            </div>
        </div>
        <div className="flex items-center  gap-14 w-1/3 flex-col">
            <div className="flex items-start justify-center gap-14 w-full ">
                <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Xperience</h2>
                <ul className="flex flex-col items-center">
                    <li className="cursor-pointer hover:opacity-90">FAQ</li>
                    <li className="cursor-pointer hover:opacity-90">Contato</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Titulo</h2>
                <ul className="flex flex-col items-center">
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                </ul>
            </div >
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-semibold">Titulo</h2>
                <ul>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                    <li className="cursor-pointer hover:opacity-90">Item</li>
                </ul>
            </div>
            </div>
            <div className="flex justify-end items-end w-full h-full">
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