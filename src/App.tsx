import styles from "./App.module.scss";
import { Slider } from "./components/Slider/Slider.tsx";

function App() {
  return (
    <div className={styles.app}>
      <h1>Slider</h1>
      <div style={{ width: "100%" }}>
        <Slider />
      </div>
    </div>
  );
}

export default App;

const slides = [
  "https://unsplash.it/400/200?image=1",
  "https://unsplash.it/400/200?image=1",
  "https://unsplash.it/400/200?image=1",
  "https://unsplash.it/400/200?image=1",
];
