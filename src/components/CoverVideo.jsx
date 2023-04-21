import React from 'react'
import VideoImg from '../assets/Video using Anima plugin.png'

function CoverVideo() {
  return (
    <div className="h-600 w-full bg-CoverVideoBg flex items-center justify-center">
        <img className="px-8 cursor-pointer" src={VideoImg} alt="" />
    </div>
  )
}

export default CoverVideo