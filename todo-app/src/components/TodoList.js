import React from 'react'
import Todo from './Todo'
import TodoAdd from './TodoAdd'
import TodoCategory from './TodoCategory'
import TodoFilter from './TodoFilter'
import TodoHeader from './TodoHeader'
function TodoList() {
    return (
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card" id="list1">
              <div className="card-body py-4 px-4 px-md-5">
      <TodoHeader />
      <TodoAdd />
      <TodoFilter />
      <div className="row">
      <Todo />
      <TodoCategory />
      </div>
             
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default TodoList


 
