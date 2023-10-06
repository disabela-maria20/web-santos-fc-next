/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/atoms'
import React from 'react'

const Modal = ({ modal, setModal }: IModalProps) => {
  return (
    <article
      className={`bg-black bg-opacity-40 fixed top-0 px-15  left-0 z-50 flex items-center justify-center w-full h-[100vh]
        ${modal ? 'block' : 'hidden'}
      `}>
      <div className='bg-white rounded-2xl sm:max-w-screen-lg  relative lg:max-h-[600px] '>
        <div className="absolute -top-15 -right-15">
          <div className='transition-transform hover:scale-110 cursor-pointer bg-black text-white p-15 rounded-full w-45 h-45 flex justify-center items-center' onClick={() => setModal(!false)}>X</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 items-center overflow-auto">
          <div className='hidden lg:block max-h-full'>
            <img src="/img/silhueta-cinza.png" alt="silhueta" className='max-h-[600px]'  />
          </div>
          <div className="p-15">
            <h4 className='text-black uppercase text-left text-38 font-light lg:text-55 leading-title'>
              <strong className='block font-extrabold'>Wladimir </strong>
              Mattos
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className="p-15 lg:pr-18 ">
            <img src="/img/foto1.png" alt="silhueta" className='mb-18' />
            <img src="/img/foto2.png" alt="silhueta" />
          </div>
        </div>

      </div>

    </article >
  )
}

export default Modal