import LookBook from '@/components/LookBook'
import React from 'react'

const page = ({ params }: { params: { sex: string }}) => {
  return (
    <div>
      <LookBook sex={params.sex} />
    </div>
  )
}

export default page
