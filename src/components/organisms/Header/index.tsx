/* eslint-disable @next/next/no-img-element */
import { MarqueeIn } from '@/components/atoms'
import { Menu } from '@/components/molecules'
import { Slide } from 'react-awesome-reveal'

const Header = (): JSX.Element => {
  return (
    <>
      <div className='bg-header bg-fixed bg-cover h-[45vh] md:h-[70vh]'>
        <Menu />
        <section className='container m-auto px-15'>
          <Slide direction='up' duration={2000}>
            <h1 className='text-center font-light uppercase leading-title text-white text-31 sm:text-45 md:text-55  xxl:text-79 pt-45 md:pt-66'>
              Wladimir Mattos
              <strong className='block font-bold'>JUNTOS PELO SANTOSFC </strong>
              {/* <strong className='block font-bold'>o Santos</strong> */}
            </h1>
          </Slide>

        </section>
      </div>
      <MarqueeIn />
      <div className='m-auto relative w-full flex justify-center'>
        <img src="/img/logo.png" alt='logo do santos' width={200} height={200} className='absolute top-[-130px] z-10' />
      </div>
    </>

  )
}

export default Header 
