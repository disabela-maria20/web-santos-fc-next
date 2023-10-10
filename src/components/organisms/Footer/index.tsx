/* eslint-disable @next/next/no-img-element */
import { Contact } from '@/components/molecules'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='bg-santos bg-cover overflow-x-hidden' id="contato">
        <Contact />
        <div className="container m-auto p-15">
          <Fade direction='up'>
            <div className="grid lg:grid-cols-12 gap-y-31 md:gap-31 py-31 ">
              <div className="col-span-12 md:col-span-12 lg:col-span-3 items-center relative">
                <h2 className='uppercase after:lg:absolute lg:after:bg-retangulo after:lg:w-2 after:lg:h-full after:lg:top-0 after:lg:left-[85%]'>dúvidas</h2>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className='flex items-center gap-15'>
                  <img src="/img/o-email.png" alt="email" />
                  <p>texto@gmail.com</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className='flex items-center gap-15'>
                  <img src="/img/whatsapp.png" alt="email" />
                  <p>(00) 0000-0000</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3">
                <div className='flex items-center gap-15'>
                  <img src="/img/chamada-telefonica.png" alt="email" />
                  <p>(00) 0000-0000</p>
                </div>
              </div>
            </div>
          </Fade>

        </div>
      </footer>
      <footer className='bg-black py-22 lg:py-10'>
        <div className="container m-auto p-15">
          <div className="grid md:grid-cols-2 items-center justify-center gap-13">
            <div className='text-white'>
              <p className='text-13'>© 2023 | TODOS OS DIREITOS RESERVADOS</p>
            </div>
            <div className='flex justify-end'>
              <div className="flex justify-items-end items-center gap-22">
                <span className='text-white text-13'>Desenvolvido por </span>
                <img src="/img/vibezz.png" alt="vibezz" className='w-79' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer 