import './App.css';
import TodoList from './TodoList';
import { useState } from 'react'


function App() {
  const [task, setTask] = useState('') //string
  const [todo, setTodo] = useState([]) //array

  const handleInput = (e) => {
    setTask(e.target.value);
    console.log(task)
  }

  const AddTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask('')
  }

  const handleDelete = (index) => {
    const updatedTodos = ([...todo]);
    updatedTodos.splice(index, 1)
    setTodo(updatedTodos);
  }


  return (
    <div className="App">
      <TodoList />
      <div className='todo'>
        <form onSubmit={AddTodo}>
          <input type='text' value={task} placeholder="" enter a task onChange={handleInput} />
          <button type='submit'>Add</button>
        </form>

        {todo.map((item, index) => (
          <ul>
            <li key={index}>
              {item}
              <button onClick={() => { handleDelete(index) }}>Delete</button>
            </li>
          </ul>
        ))}

      </div>
    </div>
  );
}

export default App;
