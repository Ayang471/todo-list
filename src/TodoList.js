import React, { useState } from 'react';

function TodoList() {
    const [todo, setTodo] = useState('') //strings
    const [tasks, setTasks] = useState([]); //arrays
    const [errors, setErrors] = useState(''); //error messages

    const handleInput = (e) => {
        setTodo(e.target.value); 
        console.log(tasks)
    };

    const addTask = (e) => {
        e.preventDefault();
        if (todo.trim() === ''){
            setErrors('Please enter a todo');
            return
        }
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
                {errors && <p className="error-message">{errors}</p>}
            </form>
            {tasks.map((item, index) => (
                <ul>
                    <li key={index}>
                        {item}
                        <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default TodoList;