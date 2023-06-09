import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Slide from "../Slide/Slide.tsx";
import { Virtual } from "swiper";

import styles from "./Slider.module.scss";
import SliderPagination from "../SliderPagination/SliderPagination.tsx";
import { useState } from "react";

export const Slider = () => {
  const [isHoldInterval, setIsHoldInterval] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseOver={() => setIsHoldInterval(true)}
      onMouseLeave={() => setIsHoldInterval(false)}
    >
      <Swiper
        className={styles.slider}
        loop
        modules={[Virtual]}
        slidesPerView={1}
        virtual
        onMouseOver={() => setIsHoldInterval(true)}
        onMouseLeave={() => setIsHoldInterval(false)}
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

        <SliderPagination isHoldInterval={isHoldInterval} />
      </Swiper>
    </div>
  );
};
