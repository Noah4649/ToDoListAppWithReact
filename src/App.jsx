import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (!inputValue.trim()) return
    setTasks([...tasks, { id: Date.now(), text: inputValue.trim(), completed: false }])
    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTask()
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="container">
      <div className="todo-app">

        <h1>To-Do App</h1>

        {/* Progress bar — Step 7 */}

        <div className="input-area">
          <input
            type="text"
            placeholder="Add a new Task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button type="button" onClick={addTask}>+</button>
        </div>

        <div className="todos-container">
          <ul id="task-list">
            {tasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
                <div className="task-buttons">
                  <button className="edit-btn" disabled={task.completed}>✏️</button>
                  <button className="delete-btn" onClick={() => deleteTask(task.id)}>🗑️</button>
                </div>
              </li>
            ))}

            {/* Empty state — Step 8 */}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App