import UseLocalStorage from "./hooks/UseLocalStorage"
import LocalStorageHook from "./hooks/UseLocalStorage"

function CustomHookExample2() {
    const [task, setTask] = UseLocalStorage('task','')
    const [tasks, setTasks] = UseLocalStorage('tasks',[])

    const onSubmit = e => {
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString
        }

        setTasks([...tasks, taskObj])
    }
    return (
        <>
       <form className='w-50' onSubmit={onSubmit}>
           <div className="mb-3">
              <label htmlFor="" className="form-label">Task</label>
              <input className="form-control" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
           </div>
              <button className="btn btn-primary" type="submit">Submit</button>
       </form>
       <hr />

       {tasks.map((task) => (
           <h3 key={task.date}>{task.task}</h3>
       ))}
       </>
    )
}

export default CustomHookExample2
