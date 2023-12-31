/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

type TypeSlide = {
  id: number,
  title: string,
  paragraph: string
}[]

const Slide = () => {
  const list: TypeSlide = [
    { id: 0, title: 'Título', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ' },
    { id: 1, title: 'Título', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ' },
    { id: 2, title: 'Título', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ' },
  ]
  const slide_item = [] as any[];

  for (let index = 0; index < 2; index++) {
    slide_item.push(
      list.map(({ id, title, paragraph }) => (
        <SwiperSlide key={id} className='mt-22 '>
          <div className='bg-gradient-to-r touch-pan-y from-yellow-100 to-yellow-200 rounded-xl overflow-auto p-18'>
            <div className='flex justify-between py-6 rounded-xl items-center bg-gradient-to-r from-black to-gray-200 text-white text-center '>
              <img src="/img/pointed-star.png" alt="Estrela" className='px-15' />
              <h3 className='text-26'>
                {title}
              </h3>
              <img src="/img/pointed-star.png" alt="Estrela" className='px-15' />
            </div>
            <p className='pt-18'>{paragraph}</p>
          </div>
        </SwiperSlide>
      ))
    )

  }
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        hide: true,
      }}
      // centeredSlides={true}
      modules={[FreeMode, Scrollbar]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 10,
        // },
      }}
    >
      {slide_item}
    </Swiper>
  )
}

export default Slide
