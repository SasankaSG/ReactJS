import React from 'react'

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo =>todo.id === id);
        //console.log(selectedTask);
        setTask(selectedTask);
        //captured the individual task and stored it on setTask
    }

    //3 elements, isited 1st elem, if not id then keep it. if id matches then we wont update it in new array
    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id);
        setTasklist(updatedTaskList);
    }

  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>To-Do Tasks</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => 
                <li key={todo.id}>
                    <p>
                        <span className='name'>{todo.name}</span>
                        <span className='time'>{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                </li>
            )}            
        </ul>
    </section>
  )
}
