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
