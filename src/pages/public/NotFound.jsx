import React from 'react'
import img from '../../img/404.svg'

export default function NotFound() {
  return (
    <section className='bg-black w-full h-screen flex justify-center items-center'>
      <img className='w-[500px] max-[510px]:w-full' src={img} />
    </section>
  )
}
