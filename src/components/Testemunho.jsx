import React from 'react'
import ElipseImage from '../assets/Ellipse.png'
import aspas from '../assets/aspas.png'

function Testemunho() {
  return (
    <div className="bg-testemunhoBg h-1100 w-full flex justify-center flex-col gap-16 lg:hidden py-7">
        <div className="flex items-center justify-center w-full">
            <img className="w-2/4" src={ElipseImage} alt="" />
        </div>
        <div>
            <div className="w-full flex items-start flex-col px-24 gap-8">
                <img src={aspas} alt="" />
                <p>Desde que contratamos os serviços da Xperience, a nossa marca nunca mais foi a mesma. A equipe é altamente competente e profissional, sempre buscando entender as nossas necessidades e oferecendo soluções criativas e inovadoras para o nosso negócio. Com a ajuda da agência, conseguimos nos destacar em um mercado altamente competitivo e alcançar resultados incríveis. A Xperience realmente faz jus ao nome, pois nos proporcionou
                  uma experiência única e transformadora. Recomendo a todos que querem elevar o patamar da sua marca!
                </p>
                <h2>ANDRÉ</h2>
            </div>
        </div>
    </div>
  )
}

export default Testemunho