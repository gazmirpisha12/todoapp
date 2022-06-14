import React from "react";
import { Input } from 'semantic-ui-react'

function TodoFilter({searchItems,search,setSearch}) {

  return (
    <div className="d-flex justify-content-start align-items-center mb-4 pt-2 pb-3">
         <Input icon='search'
                placeholder='Search...'
                onChange={event => {
                    setSearch(event.target.value);
                  }}

            />
     
    </div>
  );
}

export default TodoFilter;