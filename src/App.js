import React, { useState } from "react";
import "./App.css";

// Main App component
function App() {
  // Initialize state for the list of tasks and the current input value
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to handle the addition of a new task
  const addTask = () => {
    if (inputValue.trim()) {
      // Add the new task to the list and reset the input field
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  // Function to handle the deletion of a task
  const deleteTask = (index) => {
    // Remove the task at the given index from the list
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Render the component
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
