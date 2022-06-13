import React, { useState } from "react";
import { Card, Input } from 'semantic-ui-react'

function TodoFilter({searchItems,search,setSearch}) {

  return (
    <div className="d-flex justify-content-start align-items-center mb-4 pt-2 pb-3">
         <Input icon='search'
                placeholder='Search...'
                onChange={event => {
                    setSearch(event.target.value);
                  }}
                // onChange={(e) => searchItems(e.target.value)}
            />
     
    </div>
  );
}

export default TodoFilter;