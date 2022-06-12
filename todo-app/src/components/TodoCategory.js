import React from "react";

function TodoCategory({ task, index, completeTask, removeTask,category }) {
  console.log(task.category);
 
  return (
    <div className="card">
     <h3>{task.category}</h3>
        <ul className="list-group list-group-horizontal rounded-0">
          <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            <p style={{ textDecoration: task.completed ? "line-through" : 'none' }} className="lead fw-normal mb-0">{task.title}</p>
          </li>

          <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
            <div className="d-flex flex-row justify-content-end mb-1">
            <a
              href="#!"
              className="text-info"
              data-mdb-toggle="tooltip"
              title="Complete"
              onClick={() => completeTask(index)}
            >
                <i className="fa-solid fa-check me-3"></i>
             
            </a>
            <a
              href="#!"
              className="text-danger"
              data-mdb-toggle="tooltip"
              title="Delete todo"
              onClick={() => removeTask(index)}
            >
              <i className="fas fa-trash-alt"></i>
            </a>
            </div>
            <div className="text-end text-muted">
              <a
                href="#!"
                className="text-muted"
                data-mdb-toggle="tooltip"
                title="Created date"
              >
                <p className="small mb-0">
                  <i className="fas fa-info-circle me-2"></i>
                  {task.createdTime}
                </p>
              </a>
            </div>
          </li>
        </ul>
      
    </div>
  );
}

export default TodoCategory;
