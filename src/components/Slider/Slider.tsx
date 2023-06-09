import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Slide from "../Slide/Slide.tsx";
import { useCallback, useRef } from "react";
import Arrow from "../Arrow/Arrow.tsx";
import { Virtual } from "swiper";

import styles from "./Slider.module.scss";

export const Slider = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Swiper
          ref={sliderRef}
          className={styles.slider}
          loop
          modules={[Virtual]}
          slidesPerView={1}
          virtual
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={(swiper) => console.log("slide change", swiper)}
        >
          <div>
            {Array(10)
              .fill("")
              .map((_, i) => (
                <section key={i + 1}>
                  <SwiperSlide>
                    <Slide currentNumber={i + 1} />
                  </SwiperSlide>
                </section>
              ))}
          </div>
          <Arrow direction={"prev"} onClick={handlePrev} />
          <Arrow direction={"next"} onClick={handleNext} />
        </Swiper>
      </div>
    </div>
  );
};
