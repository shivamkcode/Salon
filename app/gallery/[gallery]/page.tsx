import LookBook from '@/components/LookBook'
import React from 'react'

const page = ({ params }: { params: { gallery: string }}) => {
  return (
    <div className={`${
      params.gallery === "male"
        ? "bg-black opacity-95 text-white"
        : "bg-[#DD1619] text-[#F6CC6F]"
    } sm:text-center `}>
      <LookBook sex={params.gallery} />
    </div>
  )
}

export default page
