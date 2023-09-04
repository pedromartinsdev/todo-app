import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Input />
    </div>
  );
}
