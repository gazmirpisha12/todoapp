import React from "react";

function CompletedTask({ task, index, completeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : 'none' }}
    >
      {task.title}
      <a onClick={() => completeTask(task.id)}></a>
    </div>
  );
}

export default CompletedTask;
