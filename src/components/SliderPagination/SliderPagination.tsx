import Arrow from "../Arrow/Arrow.tsx";
import { useSwiper } from "swiper/react";
import { FC, useEffect, useRef, useState } from "react";

const SliderPagination: FC<{ isHoldInterval: boolean }> = ({
  isHoldInterval,
}) => {
  const swiper = useSwiper();
  const interval = useRef<number>();
  const [timeBeforeNextSlide, setTimeBeforeNextSlide] = useState(2000);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    interval.current = setInterval(() => {
      if (isHoldInterval) return;

      setTimeBeforeNextSlide((prev) => prev - 1);
      if (timeBeforeNextSlide <= 0) {
        swiper.slideNext();
        setTimeBeforeNextSlide(2000);
      }
    }, 1);
    return () => {
      clearInterval(interval.current);
    };
  }, [isHoldInterval, swiper, timeBeforeNextSlide]);

  const onSlideChange = (direction: "prev" | "next") => {
    if (direction === "prev") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };
  return (
    <div>
      <Arrow direction={"prev"} onClick={() => onSlideChange("prev")} />
      <Arrow
        direction={"next"}
        onClick={() => onSlideChange("next")}
        timeBeforeNextSlide={Math.floor(timeBeforeNextSlide / 100)}
      />
    </div>
  );
};

export default SliderPagination;
