import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.css";
import "./global.css";


export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Input />
    </div>
  );
}
