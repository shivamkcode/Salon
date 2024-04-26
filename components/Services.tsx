import React from 'react'
import { Props } from './Nav'

const Services: React.FC<Props> = (props) => {
  return (
    <div className='p-6 md:p-8 lg:p-10 flex flex-col gap-4'>
      <h1 className='font-bold text-3xl lg:text-5xl uppercase'>Browse Our Services</h1>
      <h5>Experience sophistication, where passion for {props.sex === 'male' ? 'barbering' : 'beauty'} meets modern elegance. Discover premium services and personalized experiences for a flawless look.</h5>
      <h4>Menu will be here</h4>
    </div>
  )
}

export default Services
