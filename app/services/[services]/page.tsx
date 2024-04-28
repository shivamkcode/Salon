import Services from '@/components/Services'
import React from 'react'

const page = ({ params }: { params: { services: string }}) => {
  return (
    <div className={`${
      params.services === "male"
        ? "bg-black opacity-95 text-white"
        : "bg-[#DD1619] text-[#F6CC6F]"
    } sm:text-center `}>
      <Services sex={params.services} />
    </div>
  )
}

export default page
