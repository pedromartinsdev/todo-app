import { useState } from "react";
import styles from "./Input.module.css";
import { PlusCircle } from "phosphor-react";
import { Counter } from "./Counter";
import { List } from "./List";

export function Input() {
  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask() {
    event.preventDefault();
    const newTask = event.target.todo.value
    setTasks([...tasks, { id: tasks.length, todo: newTask, status: "" }]);
    event.target.todo.value = ''
  }

  function deleteTodo(taskToDelete){
    const todosWithoutDeleteOne = tasks.filter(task => {
      return task.todo !== taskToDelete
    })

    setTasks(todosWithoutDeleteOne)
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.containerWrapper}>
        <input
          className="todoInput"
          name="todo"
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <button  type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <Counter tasks={tasks} />
      <List tasks={tasks} deleteTodo={deleteTodo}/>
    </div>
  );
}
