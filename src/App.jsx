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

  return (
    <div className="container">
      <div className="todo-app">

        <h1>To-Do App</h1>

        {/* Progress bar — Step 7 */}

        {/* Input area */}
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

        {/* Task list — Step 3 */}
        <div className="todos-container">
          <ul id="task-list">
            {/* Empty state — Step 8 */}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App