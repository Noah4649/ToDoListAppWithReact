import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editId, setEditId] = useState(null)

  const completedCount = tasks.filter((task) => task.completed).length
  const totalCount = tasks.length
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  const addTask = () => {
    if (!inputValue.trim()) return

    if (editId !== null) {
      setTasks(tasks.map((task) =>
        task.id === editId ? { ...task, text: inputValue.trim() } : task
      ))
      setEditId(null)
    } else {
      setTasks([...tasks, { id: Date.now(), text: inputValue.trim(), completed: false }])
    }

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

  const editTask = (task) => {
    setInputValue(task.text)
    setEditId(task.id)
  }

  return (
    <div className="container">
      <div className="todo-app">

        <h1>To-Do App</h1>

        <div className="progress-container">
          <div className="progress-bar-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="task-counter">
            <span>{completedCount}/{totalCount}</span>
          </div>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Add a new Task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button type="button" onClick={addTask}>
            {editId !== null ? '✔️' : '+'}
          </button>
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
                  <button
                    className="edit-btn"
                    disabled={task.completed}
                    onClick={() => editTask(task)}
                  >✏️</button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >🗑️</button>
                </div>
              </li>
            ))}

            {tasks.length === 0 && (
              <div className="empty-state">
                <img src="/empty.png" alt="No tasks" />
                <p>No tasks yet. Add one above!</p>
              </div>
            )}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App