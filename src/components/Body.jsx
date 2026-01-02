import React, { useState } from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList'

const Body = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);

  const handleAddTodos = (Todo) => {
    const newTodo = {
      id: Date.now(),
      text: Todo,
    };

    setTodos([...todos, newTodo]);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEdit = (id, newText)=>{
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditTodoId(null);
  } 

  return (
    <div>
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit}/>
      <TodoForm onAddTodo = {handleAddTodos} />
      
    </div>
  )
}

export default Body