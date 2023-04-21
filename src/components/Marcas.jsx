import React from 'react'
import Amazon from '../assets/Amazon.png'
import Apple from '../assets/Apple.png'
import Beco from '../assets/Beco.png'
import Google from '../assets/Google.png'
import Nestle from '../assets/Nestle.png'
import Walmart from '../assets/Walmart.png'

function Marcas() {
  return (
    <div className="bg-white w-full h-40 flex items-center justify-center gap-6">
        <div className="flex items-center justify-between h-full flex-col lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-rol h-full gap-6 items-center justify-center">
                <img src={Amazon} alt="Amazon Logo" />
                <img src={Apple} alt="Apple Logo" />
                <img src={Beco} alt="Beco Logo" />
                <img src={Google} alt="Google Logo" />
            </div>
           <div className="flex flex-1 flex-rol h-full gap-6 items-center justify-center">
             <img src={Nestle} alt="Nestle Logo" />
            <img src={Walmart} alt="Walmart Logo" />
           </div>
        </div>
    </div>
  )
}

export default Marcas