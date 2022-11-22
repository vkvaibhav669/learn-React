import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  // const name = 'Vaibhav kumar';
  // const x = false;
  const [tasks, setTasks] = useState([
    {
        id:1,text:'Learn React.js',
        day :'22 Nov 2022',
        reminder : false,

    },
    {
        id:2,text:'Learn Typescript',
        day :'25 Nov 2022',
        reminder : false,
    },
    {
        id:3,text:'Learn Angular',
        day :'27 Nov 2022',
        reminder : false,
    },
] )

const deleteTask = (id) =>{
 // console.log('delete',id);
 setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = (id) => {
  console.log(id);
  setTasks(tasks.map((task)=>task.id===id ? {...task , reminder: !task.reminder}: task  ))
}

  return (
    <div className="container">
      <Header />
      {tasks.length >0 ? ( 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
  ) : ('No Task To show ')}
    </div>
  );
}

export default App;
