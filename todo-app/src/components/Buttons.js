import React from 'react'
import Data from "../data/data";
function Buttons({ filterItem, setItem, menuItems }) {
  return (
    <>
      
        {menuItems.map((Val, id) => {
          return (
            
            <button
              className="btn btn-outline-info btn-rounded"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn btn-outline-info btn-rounded"
          onClick={() => setItem(Data)}
        >
          All
        </button>
        

       
     
    </>
  )
}

export default Buttons
