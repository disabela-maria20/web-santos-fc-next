/* eslint-disable @next/next/no-img-element */
import { Title } from '@/components/atoms'
import { Menu } from '@/components/molecules'
import { Footer } from '@/components/organisms'
import React from 'react'

const Galeria = () => {
  return (
    <>
      <div className='bg-black'>
        <Menu />
      </div>
      <div className="container m-auto p-15">
        <h1 className='text-35 xxl:text-55 uppercase font-bold my-38'>Galeria</h1>
        <Title>Foto</Title>
        <div className='grid gap-22 md:grid-cols-3 mt-8 mb-26'>
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
        </div>
        <Title>Vídeo</Title>
        <div className='grid gap-22 md:grid-cols-3 mt-8 mb-26'>
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
        </div>
        <Title>Link</Title>
        <div className='grid gap-22 md:grid-cols-3 mt-8 mb-26'>
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
          <img src="/img/elenco-santos-classico-palmeiras.webp" alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Galeria
