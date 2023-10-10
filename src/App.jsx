import BuyBtn from "./components/BuyBtn";
import Description from "./components/Description";
import PosterPhoto from "./components/PosterPhoto";
import Title from "./components/Title";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <div>
        <PosterPhoto />
      </div>
      <div>
        <Title />
        <Description />
        <BuyBtn />
        <br />
        <br />
      </div>
    </div>
  );
}
