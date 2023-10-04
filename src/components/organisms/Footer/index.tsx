import React from 'react'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-gray-900' id="contato">
      <>
        <h2 className='text-white text-center pt-66 sm:pt-95 pb-38'>Entre em <span className='text-yellow'>contato</span> </h2>
      </>

    
    </footer>
  )
}

export default Footer 