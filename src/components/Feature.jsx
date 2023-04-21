import React from 'react'
import ElipseFeature from '../assets/Ellipse 584.png'

function Feature() {
  return (
    <div className="flex flex-col bg-white gap-20 h-1212 w-full items-center justify-center lg:flex-row lg:h-500 lg:px-16">
        <div className="flex flex-col items-center justify-center w-full gap-7 text-center px-10">
            <img src={ElipseFeature} alt="" />
            <h2 className="text-1xl font-bold">Beneficio 1</h2>
            <p className="text-gray-500">Descrição Descrição Descrição Descrição Descrição Descrição</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-7 text-center px-10">
            <img src={ElipseFeature} alt="" />
            <h2 className="text-1xl font-bold">Beneficio 2</h2>
            <p className="text-gray-500">Descrição Descrição Descrição Descrição Descrição Descrição</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-7 text-center px-10">
            <img src={ElipseFeature} alt="" />
            <h2 className="text-1xl font-bold">Beneficio 3</h2>
            <p className="text-gray-500">Descrição Descrição Descrição Descrição Descrição Descrição</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-7 text-center px-10">
            <img src={ElipseFeature} alt="" />
            <h2 className="text-1xl font-bold">Beneficio 4</h2>
            <p className="text-gray-500">Descrição Descrição Descrição Descrição Descrição Descrição</p>
        </div>
    </div>
  )
}

export default Feature