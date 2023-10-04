/* eslint-disable @next/next/no-img-element */
import { Title } from '@/components/atoms'
import React from 'react'

type TypeItem = {
  id: number, 
  icon: string,
  title: string, 
  paragraph: string
}[]

const Main = () => {
  const item: TypeItem = [
    {id:1, icon: 'presentation.png', title: 'Título 1', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
    {id:1, icon: 'layers.png', title: 'Título 2', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
    {id:1, icon: 'to-do-list.png', title: 'Título 3', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
  ]

  return (
    <main className='pt-136'>
      <div className="container m-auto p-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-45">
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
               {item.map(({id, icon, paragraph, title}) => (
                <div key={id}>
                  <img src={`/img/${icon}`} alt={title} className='w-full h-95 object-contain mb-22'  />
                  <h3 className='text-center'>{title}</h3>
                  <p className='text-15'>{paragraph}</p>
                </div>
               ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
