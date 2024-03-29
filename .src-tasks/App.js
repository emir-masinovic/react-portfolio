import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 PM',
        reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30 PM',
      reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30 PM',
    reminder: false,
  },
])

const [showAddTask, setShowAddTask] = useState(true)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task)
  )
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000 + 1)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? 
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
          : ('No tasks to show')
        }
      </div>
    </>
  );
}
export default App;
