import React from 'react'
import Elipse from '../assets/Ellipse 584.png'
import Start from '../assets/Stars.png'

function TestemunhoDesk() {
  return (
    <div className="hidden lg:flex flex-col gap-16 justify-center h-500 bg-testemunhoBg w-full">
        <div className="flex items-center justify-center">
            <div className="w-2/4">
            <h3 className="font-bold">
                “Desde que contratamos os serviços da Xperience, a nossa marca nunca mais foi a mesma. A equipe é altamente competente e profissional, sempre buscando entender as nossas necessidades e oferecendo soluções criativas e inovadoras para o nosso negócio. Com a ajuda da agência, conseguimos nos destacar em um mercado altamente competitivo e alcançar resultados incríveis. A Xperience realmente faz jus ao nome, pois nos proporcionou uma experiência única
                 e transformadora. Recomendo a todos que querem elevar o patamar da sua marca!”
            </h3>
        </div>
        </div>
        <div className="flex gap-4 items-center justify-evenly">
            <div className="flex gap-4">
                <img src={Elipse} alt="" />
                <div className="flex flex-col gap-2">
                    <h2>ANDRÉ</h2>
                <img src={Start} alt="" />
                </div>
            </div>
            <div>
               
            </div>
        </div>
    </div>
  )
}

export default TestemunhoDesk