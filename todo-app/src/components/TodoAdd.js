import React, { useState } from "react";
import Select from "react-select";

function TodoAdd({ addTask, selected }) {
  const [options] = useState([
    {
      label: "Plans",
      value: "plans",
    },
    {
      label: "Work",
      value: "work",
    },
    {
      label: "Studies",
      value: "studies",
    },
    {
      label: "Raports",
      value: "raports",
    },
  ]);

  const [value, setValue] = useState("");
 // set value for default selection
 const [selectedValue, setSelectedValue] = useState();

 // handle onChange event of the dropdown
 const handleChange = e => {
   setSelectedValue(e.value);
   console.log(selectedValue);
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!value) return;

    addTask(value,selectedValue);
    setValue("");
    setSelectedValue("")
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
              <div class="form-control d-flex justify-content-end align-items-center">
                <p class="small mb-0 me-2 text-muted">Category</p>
                {/* <select className="select" value={options}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> */}
                {/* <Select defaultValue={options} options={options} /> */}
                <Select
                defaultValue='None'
        placeholder="Select Option"
        value={options.filter(obj => obj.value === selectedValue)} // set selected value
        options={options} // set list of the data
        onChange={handleChange} // assign onChange function
      />
               
                {/* <select value={selectedClient} onChange={handleSelectChange}>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select> */}
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Add
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
