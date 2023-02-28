import React from "react";
import { ITask } from "./../Interface";
interface Props {
  task?: ITask;
  deadline?: number;
  completeTask?(taskNameToDelete?: string): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task?.taskName}</span>
        <span>{task?.deadline}</span>
      </div>
      <button
        onClick={() => {
          if (completeTask) {
            completeTask(task?.taskName);
          }
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
