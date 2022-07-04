import { useState } from 'react'
import Todo from '../Todo'

export const TodoList = () => {
  const data = [
    { todo: 'clean dishes', complete: false, id: 1 },
    { todo: 'clean dishes 2', complete: false, id: 2 },
  ]
  const [todos, setTodos] = useState(data)
  const [value, setValue] = useState('')

  const handleChangeValue = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    setTodos([...todos, { todo: value, complete: false, id: Math.random() }])
    setValue('')
  }

  console.log('todos', todos)
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          allTodos={todos}
          key={index}
          todoProps={todo}
          handleSetTodos={setTodos}
        />
      ))}
      <input value={value} onChange={handleChangeValue} />
      <button onClick={handleSubmit}>Add todo</button>
    </div>
  )
}

export default TodoList
