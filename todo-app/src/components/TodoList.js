import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import TodoHeader from "./TodoHeader";
import Data from "../data/data";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import { v4 as uuid } from "uuid";
import TodoFilter from "./TodoFilter";
function TodoList() {
  const [tasks, setTasks] = useState(Data);

  console.log(tasks);
  const addTask = (title, selectedValue, id) => {
    const current = new Date();
    console.log(selectedValue);
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    console.log(date);
    const unique_id = uuid();
    id = unique_id.slice(0, 8);
    const newTasks = [
      ...tasks,
      {
        title,
        completed: false,
        createdTime: date,
        category: selectedValue,
        id: id,
      },
    ];
    setTasks(newTasks);
    console.log(tasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const categorizedData = tasks.reduce((acc, curr) => {
    const { category, title, createdTime, completed } = curr;

    if (!acc[category]) {
      acc[category] = {
        items: [],
      };
    }
    acc[category].items.push(curr);

    return acc;
  }, {});

  console.log("categorizedData", categorizedData);

  const array = [];

  for (const [index, value] of Object.entries(categorizedData)) {
    array.push([value, index]);
  }
  console.log("Lists", array);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setTasks(newItem);
  };
  const [search, setSearch] = React.useState("");

  const [filteredPosts, setFilterPosts] = useState(tasks);

  useEffect(() => {
    setFilterPosts(
      tasks.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, tasks]);
  console.log(search, tasks);
  console.log(search);

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card" id="list1">
            <div className="card-body py-4 px-4 px-md-5">
              <TodoHeader />
              <TodoAdd addTask={addTask} />
              <TodoFilter search={search} setSearch={setSearch} tasks={tasks} />
              <div className="row pt-5">
                <div className="col">
                  <h4>My Notes {tasks.length}</h4>
                  {!filteredPosts.length ? (
                    <p>No posts found</p>
                  ) : (
                    filteredPosts.map((task, index) => (
                      <Todo
                        task={task}
                        index={index}
                        key={index}
                        createdTime={task.createdTime}
                        completeTask={completeTask}
                        removeTask={removeTask}
                      />
                    ))
                  )}
                  {/* {tasks.map((task, index) => (
                    <Todo task={task} index={index} key={index} createdTime={task.createdTime} completeTask={completeTask} removeTask={removeTask}/>
                  ))} */}
                </div>
                <div className="col">
                  <div class="flex-container">
                    <div class="flex-child magenta">
                      <h4 className="center">Category {array.length}</h4>
                    </div>

                    <div class="flex-child green">
                      <Buttons
                        filterItem={filterItem}
                        setItem={setTasks}
                        menuItems={menuItems}
                      />
                    </div>
                  </div>
                  <Tasks
                    tasks={tasks}
                    completeTask={completeTask}
                    removeTask={removeTask}
                  />
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
