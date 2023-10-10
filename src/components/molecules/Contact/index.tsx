/* eslint-disable @next/next/no-img-element */
import { Title } from '@/components/atoms'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <section className=' py-66 lg:py-95'>
      <div className="container m-auto px-15">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-45 mt-31'>
          <div className="lg:col-span-5 hidden lg:block">
            <div className='m-auto relative w-full'>
              <Slide>
                <Title>contato</Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt ratione quae ex quaerat itaque a voluptatum distinctio. Ad iusto quisquam, commodi eum rem voluptate tempore voluptas repudiandae fugiat ipsa?</p>
                <img src="/img/logo.png" alt='logo do santos' width={250} height={250} className='pt-26 z-10 m-auto' />
              </Slide>
            </div>
          </div>
          <div className='lg:col-span-7'>
            <Slide direction='right'>
              <label htmlFor="">
                Nome
                <input type="text" className='w-full h-38 xxl:h-45 rounded-md px-15 mb-15' id='nome' />
              </label>
              <label htmlFor="E-mail">
                E-mail
                <input type="text" className='w-full h-38 xxl:h-45 rounded-md px-15 mb-15' id='E-mail' />
              </label>
              <label htmlFor="Telefone">
                Telefone
                <input type="text" className='w-full h-38 xxl:h-45 rounded-md px-15 mb-15' id='Telefone' />
              </label>
              <label htmlFor="Mensagem">
                Mensagem
                <textarea className='w-full h-79 lg:h-[165px] rounded-md px-15 mb-15' id='Mensagem' />
              </label>
              <button className='bg-gradient-to-r from-yellow-100 to-yellow-200 text-black font-semibold px-18 py-8 rounded-2xl uppercase transition-colors  hover:from-yellow-200 hover:to-yellow-100'>enviar</button>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
