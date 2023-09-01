import { ClipboardText, Trash } from "phosphor-react";
import styles from "./List.module.css";

export function List({ tasks, deleteTodo }) {
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
          
          return (
            <div className={styles.todoWrapper} key={task.todo}>
              <div className={styles.content}>
                {
                  
                }
                <input type="checkbox"/>
                <span>{task.todo}</span>
                <Trash size={24} className={styles.todoDelete} onClick={handleDeleteTodo} />
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}
