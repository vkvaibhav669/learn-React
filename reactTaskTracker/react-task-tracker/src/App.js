import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'
import { useState , useEffect } from 'react'

function App() {
  // const name = 'Vaibhav kumar';
  // const x = false;
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([] )
  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()
  },[])

  const fetchTasks = async () => {
    const resp = await fetch('http://localhost:5050/tasks' , {mode:'cors'});
    const data = await resp.json();
    console.log(data);
    return data;
  }

  const fetchTask = async (id) => {
    const resp = await fetch(`http://localhost:5050/tasks/${id}` );
    const data = await resp.json();
    console.log(data);
    return data;
  }


//add task 
const addTask = async (task)=>{
  const res = await fetch('http://localhost:5050/tasks' , {
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body : JSON.stringify(task),
  })
  const data = await res.json();
  console.log(data);
  setTasks([...tasks,data])
  
}
//const id = Math.floor(Math.random()*1000) +1;
  //const newTask = {id,...task};
  //setTasks([...tasks,newTask]);
  //console.log('task',task);

const deleteTask = async (id) =>{
 // console.log('delete',id);
await fetch(`http://localhost:5050/tasks/${id}`,{
  method : 'DELETE',
})
 setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id);
  const updTask = { ...taskToToggle, 
      reminder : !taskToToggle.reminder }                         }

  //console.log(id);
  setTasks(tasks.map((task)=>task.id===id ? {...task , reminder: !task.reminder}: task  ))
}

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length >0 ? ( 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
  ) : ('No Task To show ')}
    </div>
  );
}

export default App;
