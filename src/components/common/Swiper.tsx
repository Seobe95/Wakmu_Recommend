import { Swiper } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { useSwipeSlider } from '@/lib/zustand/useSwipeSlider';

interface SwiperProps {
  children: React.ReactNode;
}

export default function SwiperContainer({ children }: SwiperProps) {
  const { setCurretPage } = useSwipeSlider((state) => ({
    setCurretPage: state.setCurrentFocusPage,
  }));
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      modules={[EffectCards]}
      onSlideChange={(event) => {
        setCurretPage(event.realIndex)
      }}
      effect="cards"
      grabCursor={true}
    >
      {children}
    </Swiper>
  );
}
