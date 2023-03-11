import React from 'react'
import gif from '../../img/netflixLoading.gif'

export function Loading() {
  return (
    <section className='bg-black w-full h-screen grid place-content-center'>
        <img src={gif} alt='loading' />
    </section>
  )
}
