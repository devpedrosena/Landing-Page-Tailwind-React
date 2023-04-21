import React from 'react'
import ImageMain from  '../assets/PromoçãoEletrônicos.jpg'

function Main() {
  return (
    <div className="flex items-center justify-center w-4/4 flex-col gap-16 lg:flex-row px-16 h-screen w-full">
        <div className=" w-full font-inter leftMain flex items-center mx-auto text-center flex-col gap-7 mt-0">
            <h1 className='font-bold text-3xl'>
                <span className="text-orange-500" >Xperience:</span> a agência que cria experiências únicas para sua marca
            </h1>
            <p>
                Transformando ideias em resultados tangíveis através de soluções inovadoras e personalizadas
            </p>
            <div className="flex gap-7">
              <button className=" transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-bold bg-orange-500 text-white  px-8 py-2 rounded-3xl w-32">CTA</button>
            <button className=" ease-in duration-300 hidden bg-BgColor border-2 hover:border-gray-300 text-black w-32 px-8 py-2 rounded-3xl lg:block ">Botão</button>
            </div>
        </div>
        <div className="w-4/4 rigthMain flex items-center justify-center lg:w-full">
          <img  className="rounded-2xl w-[85%]" src={ImageMain} alt="" />
        </div>
        
    </div>
    
  )
}

export default Main