import { FC } from "react";
import styles from "./Slide.module.scss";

const Slide: FC<{ currentNumber: number }> = ({ currentNumber }) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div
      style={{
        backgroundColor: randomColor,
        height: 300,
      }}
      className={styles.slide}
    >
      {currentNumber}
    </div>
  );
};

export default Slide;
