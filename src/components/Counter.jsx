import styles from "./Counter.module.css";

export function Counter({tasks}) {
  return (
    <div className={styles.counterWrapper}>
      <div className={styles.created}>
        <span >Tarefas criadas</span>
        <span>{tasks.length}</span>
      </div>
      <div className={styles.checked}>
        <span>Concluídas</span>
        <span>{`0 de ${tasks.length}`}</span>
      </div>
    </div>
  );
}
