import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
        <SwiperSlide key={id} className='mt-22'>
          <div className='bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl overflow-auto p-18'>
            <h3 className='bg-gradient-to-r from-black to-gray-200 text-white text-center py-6 rounded-xl'>{title}</h3>
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
      pagination={{
        clickable: true,
      }}
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
