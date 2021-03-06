import React from "react";

function Tasks({ tasks, completeTask, removeTask }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {tasks.map((Val, index) => {
                        return (
                            <div key={Val.id}>
                                <div className="list">
                                    <div className="card-title">
                                        <ul
                                            key={Val.title}
                                            className="list-group list-group-horizontal rounded-0"
                                        >
                                            <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                                <p
                                                    style={{
                                                        textDecoration: Val.completed
                                                            ? "line-through"
                                                            : "none",
                                                    }}
                                                    className="lead fw-normal mb-0"
                                                >
                                                    {Val.title}
                                                </p>
                                            </li>

                                            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                                <div className="d-flex flex-row justify-content-end mb-1">

                                               
                                                        <a
                                                        href="#!"
                                                        className="text-muted px-3"
                                                        data-mdb-toggle="tooltip"
                                                        title="Category"
                                                    >
                                                        <p className="small mb-0">
                                                           
                                                            {Val.category}
                                                        </p>
                                                    </a>


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
                                                            <i style={{color: '#0dcaf0'}} className="fas fa-info-circle me-2"></i>
                                                            {Val.createdTime}
                                                        </p>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Tasks;
