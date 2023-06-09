import { FC } from "react";
import styles from "./Arrow.module.scss";
import cn from "classnames";

const Arrow: FC<{
  direction: "prev" | "next";
  onClick: VoidFunction;
  timeBeforeNextSlide?: number;
}> = ({ direction, onClick, timeBeforeNextSlide }) => {
  const onSlideChange = () => {
    onClick();
  };

  return (
    <button
      className={cn(styles.arrow, {
        [styles.arrow__prev]: direction === "prev",
        [styles.arrow__next]: direction === "next",
      })}
      onClick={onSlideChange}
    >
      {direction === "prev" ? "<" : ">"} {timeBeforeNextSlide}
    </button>
  );
};

export default Arrow;
