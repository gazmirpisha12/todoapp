import React, { useState } from "react";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import TodoCategory from "./TodoCategory";
import TodoFilter from "./TodoFilter";
import TodoHeader from "./TodoHeader";

function TodoList({filteredData, selected}) {
    console.log(filteredData);
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
      createdTime: "11/6/2022",
      category: "Plans",
    },
    {
      title: "Do your workout",
      completed: true,
      createdTime: "10/6/2022",
      category: "Works",
    },
    {
      title: "Hangout with friends",
      completed: false,
      createdTime: "12/6/2022",
      category: "Studies",
    },
    {
        title: "Do your workout",
        completed: true,
        createdTime: "10/6/2022",
        category: "Kitap",
      },
      {
        title: "Hangout with friends",
        completed: false,
        createdTime: "12/6/2022",
        category: "Kitap",
      },
  ]);

 
  const addTask = (title,selectedValue) => {
    const current = new Date();
    console.log(selectedValue)
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    console.log(date);
    const newTasks = [...tasks, { title, completed: false, createdTime:date, category:selectedValue }];
    setTasks(newTasks);
};

const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
};
const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
};

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card" id="list1">
            <div className="card-body py-4 px-4 px-md-5">
              <TodoHeader />
              <TodoAdd addTask={addTask} />
              <TodoFilter task={tasks}/>
              <div className="row">
                <div className="col">
                    <h4>My Notes</h4>

                  {tasks.map((task, index) => (
                    <Todo task={task} index={index} key={index} createdTime={task.createdTime} completeTask={completeTask} removeTask={removeTask}/>
                  ))}
                </div>
                <div className="col">
                <h4>Category</h4>
                {tasks.map((task, index) => (
                    <TodoCategory task={task} index={index} key={index} createdTime={task.createdTime} completeTask={completeTask} removeTask={removeTask}/>
                  ))}
                {/* {tasks.filter(task => task.category).map((item, index) => (
                    
                    <TodoCategory task={item} index={index} key={index} createdTime={item.createdTime} completeTask={completeTask} removeTask={removeTask} name={item.category}/>
                
                   
                  ))} */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
