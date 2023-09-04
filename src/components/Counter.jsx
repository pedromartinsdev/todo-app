import styles from "./Counter.module.css";

export function Counter({ tasks }) {
  const todoChecked = tasks.filter((task) => task.status === "checked");
  return (
    <div className={styles.counterWrapper}>
      <div className={styles.created}>
        <span>Tarefas criadas</span>
        <span>{tasks.length}</span>
      </div>
      <div className={styles.checked}>
        <span>Concluídas</span>
        <span>{`${todoChecked.length} de ${tasks.length}`}</span>
      </div>
    </div>
  );
}
