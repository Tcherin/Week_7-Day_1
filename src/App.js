import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
     {name: "Buy Shopping", isPrioritised: true},
     {name: "Wash Car", isPrioritised: false},
     {name: "Do Laundry", isPrioritised: true}
    ])

  const [newTaskName, setNewName] = useState("")
  const [newTaskPriority, setNewPriority] = useState(null)

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.isPrioritised ? "high" : "low"}>
      <span>{task.name}</span>
      {/* {task.isPrioritised ? <span className="high priority">High</span> : <button onClick={() => {prioritiseTask(index)}}>Complete</button>} */}
      </li>
    )
  })

  const handleTaskName = (event) => {
    setNewName(event.target.value)
  }

  const handleTaskPriority = (event) => {
   if (event.target.value === "true") {
    setNewPriority(true)
   } else {
    setNewPriority(false)
   }
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({name: newTaskName, isPrioritised: newTaskPriority})
    setTasks(copyTasks)
    setNewName("")
    setNewPriority(null)
  }

  // const prioritiseTask = (index) => {
  //   const copyTasks = [...tasks]
  //   copyTasks[index].isPrioritised = true
  //   setTasks = copyTasks
  // }




  return (
    <div className="App">
      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>
      <form onSubmit={saveNewTask}>
        <label htmlFor="newTask">Add a new Task:</label>
        <input id="new-name" type="text" value={newTaskName} onChange={handleTaskName}/>
        <label htmlFor="high-priority">High:</label>
        <input id="new-priority" name="new-priority" type="radio" value="true" onChange={handleTaskPriority}/>
        <label htmlFor="low-priority">Low:</label>
        <input id="new-priority" name="new-priority" type="radio" value="false" onChange={handleTaskPriority}/>
        <input type="submit" value="Save New Task"/>
      </form>
    </div>
  );
}

export default App;
