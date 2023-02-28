import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./Interface";
import TodoTask from "./components/TodoTask";
const App: FC = () => {
  const [Task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodo] = useState<ITask[]>([]);
  const HandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: Task, deadline: deadline };
    setTodo([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputConteiner">
          <input
            type="text"
            placeholder="Task to do"
            name="task"
            onChange={HandleChange}
            value={Task}
          />
          <input
            name="deadline"
            type="number"
            placeholder="Deadline in days"
            onChange={HandleChange}
            value={deadline}
          />
        </div>
        <button
          style={{
            height: "90px",
            borderRadius: "0px 8px 8px 0px",
            cursor: "pointer",
          }}
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask
              key={key}
              task={task}
              deadline={deadline}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
