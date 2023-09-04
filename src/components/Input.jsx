import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Counter } from "./Counter";
import { List } from "./List";
import styles from "./Input.module.css";

export function Input() {
  const [tasks, setTasks] = useState([]);

  function changeStatus(task) {
    if (task.status === "") {
      task.status = "checked";
    } else {
      task.status = "";
    }

    const todosNotChecked = tasks.filter((task) => {
      return task.status !== "checked";
    });

    const todosChecked = tasks.filter((task) => {
      return task.status !== "";
    });

    setTasks([...todosNotChecked, ...todosChecked]);
  }

  function handleCreateNewTask() {
    event.preventDefault();
    const newTask = event.target.todo.value;
    setTasks([...tasks, { id: tasks.length, todo: newTask, status: "" }]);
    event.target.todo.value = "";
  }

  function deleteTodo(taskToDelete) {
    const todosWithoutDeleteOne = tasks.filter((task) => {
      return task.todo !== taskToDelete;
    });

    setTasks(todosWithoutDeleteOne);
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
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <Counter tasks={tasks} />
      <List tasks={tasks} deleteTodo={deleteTodo} changeStatus={changeStatus} />
    </div>
  );
}
