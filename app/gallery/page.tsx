"use client"
import LookBook from '@/components/LookBook'
import React, { useContext } from 'react'
import { GenderContext } from '../layout'

const Gallery = () => {
  const gender = useContext(GenderContext)

  return (
    <div className={`${
      gender === "male"
        ? "bg-black opacity-95 text-white"
        : "bg-[#DD1619] text-[#F6CC6F]"
    } sm:text-center `}>
      <LookBook sex={gender} />
    </div>
  )
}

export default Gallery
