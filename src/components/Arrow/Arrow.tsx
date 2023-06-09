import { FC } from "react";
import styles from "./Arrow.module.scss";
import cn from "classnames";
import { useSwiper } from "swiper/react";

const Arrow: FC<{ direction: "prev" | "next"; onClick?: VoidFunction }> = ({
  direction,
  onClick,
}) => {
  const swiper = useSwiper();

  const onSlideChange = () => {
    direction === "prev" ? swiper.slidePrev() : swiper.slideNext();
    onClick && onClick();
  };

  return (
    <button
      className={cn(styles.arrow, {
        [styles.arrow__prev]: direction === "prev",
        [styles.arrow__next]: direction === "next",
      })}
      onClick={onSlideChange}
    >
      {direction === "prev" ? "<" : ">"}
    </button>
  );
};

export default Arrow;
