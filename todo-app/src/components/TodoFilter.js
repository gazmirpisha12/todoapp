import React, { useEffect, useState } from "react";

function TodoFilter({ task }) {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(task);
  console.log(task);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
        console.log(data);
      return data.search(value) != -1;
    });
    setFilteredData(result);
    console.log(filteredData);
  };


  return (
    <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">

      <p className="small mb-0 ms-4 me-2 text-muted">Search</p>
      <input
        type="text"
        className="form-control-md"
        id="exampleFormControlInput1"
        placeholder="Add new..."
        onChange={(event) => handleSearch(event)}
      />
      <a
        href="#!"
        style={{ color: "#23af89" }}
        data-mdb-toggle="tooltip"
        title="Ascending"
      >
        <i className="fa-solid fa-magnifying-glass ms-2"></i>
      </a>
      {filteredData.map((value, index) => {
        return (
          <div key={value.id}>
            <div>{value.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoFilter;
