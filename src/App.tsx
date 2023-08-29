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

  const getTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTodos(data)
      })
  }

  useEffect(() => {
    getTodos()
  }, [])

  const updateTodos = (getItem: string) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ todo: getItem, id: Date.now() })
    })
      .then(res => res.json())
      .then(() => getTodos())
  }

  const removeTodo = (getId: number) => {
    // setTodos(todos.filter(item => item.id !== getId));

    fetch(`http://localhost:3000/todos/${getId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => console.log(getTodos()))
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
