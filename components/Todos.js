import { useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ id: null, body: '', completed: false })

  const handleSubmit = e => {
    e.preventDefault()
    if (todo.body) {
      setTodos([...todos, todo])
      setTodo({ body: '' })
    }
  }

  const toggleComplete = i => {
    const newTodos = [...todos] // this is necessary - a new array filled with the contents of todos, not a copy of todos
    newTodos[i].completed = !newTodos[i].completed
    setTodos(newTodos)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='enter a todo...'
          value={todo.body}
          onChange={e => setTodo({ id: todos.length+1, body: e.target.value, completed: false })} />
      </form>
      <ul>
        {todos.map(todo => (
          <li
            style={{textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer', marginBottom: '10px'}}
            key={todo.id}
            onClick={() => toggleComplete(todos.indexOf(todo))}>
            {todo.body}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos