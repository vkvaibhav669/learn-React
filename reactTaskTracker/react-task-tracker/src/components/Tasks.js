import Task from './Task'
const Tasks = ({ tasks , onDelete , onToggle }) => {
    
  return (
      
    <>
    {tasks.map((task)=>( 
    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> 
    ))}   
    </>
  )
}
// list should take unqiue props so we use key 
export default Tasks