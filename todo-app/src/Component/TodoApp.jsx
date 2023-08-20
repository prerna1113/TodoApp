import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]); // Array to store tasks

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, showDiv: false }]); // Add new task to the tasks array
  };

  const toggleDiv = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].showDiv = !updatedTasks[index].showDiv;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTask = e.target.task.value;
          addTask(newTask);
          e.target.reset();
        }}
      >
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => toggleDiv(index)}>Toggle Div</button>
            {task.showDiv && <div>This is the hidden div for task {index + 1}.</div>}
          </li>
        ))}
        {/* {!tasks.length && (
          <li>
            No tasks added.
            <div>This is the hidden div when no tasks are added.</div>
          </li> */}
        {/* )} */}
      </ul>
    </div>
  );
}

export default TodoApp;
