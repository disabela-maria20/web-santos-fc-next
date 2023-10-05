/* eslint-disable @next/next/no-img-element */
import { SvgMetodologia, Title } from '@/components/atoms'
import { Slide } from '@/components/molecules'
import React from 'react'

type TypeItem = {
  id: number,
  icon?: string,
  title: string,
  paragraph: string
}[]

const Main = () => {
  const item: TypeItem = [
    { id: 0, icon: 'presentation.png', title: 'Título 1', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 1, icon: 'layers.png', title: 'Título 2', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, icon: 'to-do-list.png', title: 'Título 3', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ]
  const list: TypeItem = [
    { id: 0, title: 'Título', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ' },
    { id: 1, title: 'Título', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ' },
    { id: 2, title: 'Título', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ' },
  ]
  return (
    <main className='pt-136'>
      <div className="container m-auto px-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-45 pb-66 md:pb-95">
          <div className='lg:col-span-5'>
            <section className='bg-black rounded-3xl relative h-full'>
              <img src="/img/silhueta.png" alt="" className='' />
              <img src="/img/meia-silhueta.png" alt="" className='absolute top-0 object-contain max-h-full' />
            </section>
          </div>
          <div className='lg:col-span-7'>
            <Title>
              obetivo
            </Title>
            <p className='max-w-xl font-light mt-15'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-38 mt-45 md:mt-66">
                {item.map(({ id, icon, paragraph, title }) => (
                  <div key={id}>
                    <img src={`/img/${icon}`} alt={title} className='w-full h-95 object-contain mb-22' />
                    <h3 className='text-center'>{title}</h3>
                    <p className='text-15'>{paragraph}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className='bg-santos bg-cover py-66 lg:py-95'>
        <div className="container m-auto px-15">
          <Title>Santos</Title>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-45'>
            <div className='lg:col-span-5'>
              {list.map(({ id, title, paragraph }) => (
                <div key={id} className='mt-22 square'>
                  <h3 className='relative'>
                    <span></span>  {title}
                  </h3>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
            <div className='lg:col-span-7'>
              <img src="/img/grafico.png" alt="Grafico Ilustrativo" className='block m-auto' />
            </div>
          </div>
        </div>
      </section>
      <section className='overflow-x-hidden'>
        <div className="container m-auto px-15 py-66 md:py-95">
          <Title>Pilares</Title>
          <Slide />
        </div>
      </section>
      <section>
        <div className="container m-auto px-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-45">
            <div className="lg:col-span-6">
              <SvgMetodologia/>
            </div>
            <div className="lg:col-span-6">a</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
