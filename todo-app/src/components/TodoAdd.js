import React, { useState } from "react";

function TodoAdd({ addTask }) {

  const options = [
    { value: 'None', text: 'Choose an option' },
    { value: 'Today', text: 'Today' },
    { value: 'Next Week', text: 'Next Week' },
    { value: 'Next Month', text: 'Next Month' },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value, selected);
    setValue("");
    setSelected("None")
  };


  return (
    <div className="pb-2">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Add a new task"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <div className="form-control d-flex justify-content-end align-items-center">
                <p className="small mb-0 me-2 text-muted">Category</p>

                <select className="form-select w-50" value={selected} onChange={handleChange}>
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>

              </div>
              <div>
                <button data-mdb-toggle="tooltip" title="Add task" type="submit" className="btn">
                  <i tooltip style={{ color: '#0dcaf0' }} className="fa-solid fa-circle-plus fa-2x"  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoAdd;
