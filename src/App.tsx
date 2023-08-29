import { useEffect, useState } from 'react'
import './App.css'
import AddTodoForm from './AddTodoForm'
import ShowTodo from './ShowTodo'
type Todo = {
  id: number,
  todo: string
}
function App() {

  const [todos, setTodos] = useState(Array<Todo>)

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTodos(data)
      })
  }, [])

  const updateTodos = (getItem: string) => {
    setTodos([...todos, { todo: getItem, id: todos.length + 1 }])
  }

  const removeTodo = (getId: number) => {
    setTodos(todos.filter(item => item.id !== getId));
  }

  return (

    <div>
      <h1>Todo</h1>
      <AddTodoForm updateTodos={updateTodos} />

      {todos.map(item => (
        <ShowTodo todo={item.todo} key={item.id} id={item.id} removeTodo={removeTodo} />
      ))}

    </div>

  )
}

export default App
