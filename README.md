# To-Do List App — React

A rebuild of my original vanilla JS To-Do app, redone in React to demonstrate 
core React concepts including component-based architecture, useState, and 
conditional rendering.

## What's Different From the Original

The original app was built with HTML, CSS, and vanilla JavaScript, using direct 
DOM manipulation (getElementById, appendChild, classList). This version replaces 
all of that with React's state-driven approach — the UI updates automatically 
whenever state changes, with no manual DOM interaction.

## React Concepts Used

- `useState` — manages tasks, input value, and edit mode
- Controlled inputs — input field is synced to state on every keystroke
- `.map()` — renders the task list from state instead of DOM manipulation
- `.filter()` — deletes tasks by returning a new array without the removed item
- Conditional rendering (`&&`) — shows the empty state only when no tasks exist
- Derived state — progress bar and counter are calculated from tasks, not stored separately

## Features

- Add tasks via button or Enter key
- Edit existing tasks
- Mark tasks as complete with a checkbox
- Delete tasks
- Progress bar and counter tracking completion
- Empty state image when no tasks exist

## How to Run

1. Clone the repository
   git clone https://github.com/Noah4649/ToDoListAppWithReact
   
2. Navigate into the project
   cd ToDoListAppWithReact

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open your browser at http://localhost:5173

## Built With

- React 18
- Vite
- CSS (Glassmorphism styling)