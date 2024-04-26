import Services from '@/components/Services'
import React from 'react'

const page = ({ params }: { params: { sex: string }}) => {
  return (
    <div>
      <Services sex={params.sex} />
    </div>
  )
}

export default page
