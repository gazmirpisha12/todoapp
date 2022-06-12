import React from "react";

function TodoFilter() {
  return (
    <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
      {/* <p className="small mb-0 me-2 text-muted">Filter</p>
      <select className="select">
        <option value="1">All</option>
        <option value="2">Completed</option>
        <option value="3">Active</option>
        <option value="4">Has due date</option>
      </select> */}
      <p className="small mb-0 ms-4 me-2 text-muted">Search</p>
      <input
        type="text"
        className="form-control-md"
        id="exampleFormControlInput1"
        placeholder="Add new..."
      />
      <a
        href="#!"
        style={{ color: "#23af89" }}
        data-mdb-toggle="tooltip"
        title="Ascending"
      >
        <i className="fa-solid fa-magnifying-glass ms-2"></i>
      </a>
    </div>
  );
}

export default TodoFilter;
