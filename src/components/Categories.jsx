import clsx from 'clsx';
import { Navigation, Scrollbar, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export function Categories({ categories, selectCategory, setSelectCategory }) {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, Mousewheel]}
      spaceBetween={10}
      slidesPerView={10}
      mousewheel={true}
      breakpoints={{
        1440: {
          slidesPerView: 8,
        },
        1024: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 4,
        },
      }}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
    >
      {categories?.map((category) => (
        <SwiperSlide key={category}>
          <button
            className={clsx(
              'px-3 py-1.5 bg-gray-100 rounded-2xl text-sm w-full',
              selectCategory === category && 'text-violet-500 bg-violet-100'
            )}
            onClick={() => setSelectCategory(category)}
          >
            {category}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
