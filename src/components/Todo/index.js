import React from 'react'

export const Todo = ({ todoProps, allTodos, handleSetTodos }) => {
  const styles = todoProps.complete === true ? { color: 'red' } : null

  const handleClick = () => {
    console.log('todoProps.completed', todoProps)
    const completed = {
      ...todoProps,
      complete: !todoProps.complete,
    }
    const filteredAllTodos = allTodos.filter((todo) => {
      return todo.id !== todoProps.id
    })
    handleSetTodos([...filteredAllTodos, completed])
  }

  return (
    <div id={todoProps.id} style={styles} onClick={handleClick}>
      {todoProps.todo}
    </div>
  )
}

export default Todo
