import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState('')

    const handleInput = (e) => {
        setTodo(e.target.value);
        console.log(tasks)
    };

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, todo]);
        setTodo('');
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className='todo-list'>
            <form onSubmit={addTask}>
                <input type="text" value={todo} placeholder="enter a todo" onChange={handleInput} />
                <button type="submit">Add</button>
            </form>
            {tasks.map((item, index) => (
                <ul>
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default TodoList;