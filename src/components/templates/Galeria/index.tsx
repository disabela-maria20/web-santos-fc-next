import { Menu } from '@/components/molecules'
import { Footer } from '@/components/organisms'
import React from 'react'

const Galeria = () => {
  return (
    <>
      <div className='bg-black'>
        <Menu />
      </div>
      <div className="conatiner m-auto p-15">
        <h1 className='text-31 xxl:text-55 uppercase font-bold'>Galeria</h1>
      </div>
      <Footer />
    </>
  )
}

export default Galeria
