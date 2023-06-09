import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Slide from "../Slide/Slide.tsx";
import Arrow from "../Arrow/Arrow.tsx";
import { Virtual } from "swiper";

import styles from "./Slider.module.scss";

export const Slider = () => {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Swiper
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
          <Arrow direction={"prev"} />
          <Arrow direction={"next"} />
        </Swiper>
      </div>
    </div>
  );
};
