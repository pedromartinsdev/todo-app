import styles from "./List.module.css";
import { ClipboardText, Trash } from "phosphor-react";

export function List({ tasks, deleteTodo, changeStatus }) {
  if (tasks.length === 0) {
    return (
      <div className={styles.todoEmptyWrapper}>
        <ClipboardText size={56} />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    );
  } else {
    return (
      <ul>
        {tasks.map((task) => {
          function handleDeleteTodo(){
            deleteTodo(task.todo)
          }
          function handleChangeStatus(){
            changeStatus(task)
          }
          return (
            <div className={styles.todoWrapper} key={task.todo+task.id}>
              <div className={styles.content}>
                <input type="checkbox" onChange={handleChangeStatus}/>
                {
                  task.status === "checked" ?  <span className={styles.checked}>{task.todo}</span> : <span>{task.todo}</span>
                }
                <Trash size={24} className={styles.todoDelete} onClick={handleDeleteTodo} />
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}
