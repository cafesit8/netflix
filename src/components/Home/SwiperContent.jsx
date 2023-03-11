import React, { Suspense } from 'react'

export function SwiperContent({img}) {
  return (
    <div className='w-full h-full'>
        <img className='object-cover w-full h-full' src={img} />
    </div>
  )
}
