import React from 'react'

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleSubmit= (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTask = tasklist.map((todo) => (
                todo.id === task.id ? { 
                    id: task.id, 
                    name: e.target.task.value, 
                    time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
                    :
                    todo
                ));
                setTasklist(updatedTask);
                setTask({});
                    //  {
                    //     todo.id,
                    //     todo.name,
                    //     todo.time
                    //  };
            

        } else{
            const date = new Date();
            const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTask]);
            setTask({});
            //e.target.task.value = ""; trying to have an empty value
        }        
    }


  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={task.name || ""} autoComplete='off' placeholder='add task' maxLength='30' onChange={e => setTask({...task, name: e.target.value})}/>
            <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}

//after edit/add we are cleaning the task and giving it a empty value