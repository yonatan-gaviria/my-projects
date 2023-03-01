import { useState } from "react"
import { Todo } from "./todo";
import "../stylesheets/stylesheet.css";

interface todo {
  id: string
  title: string
  completed: boolean
}

export function TodoApp() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState <todo[]> ([]);

  function handleClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }

    setTodos([newTodo, ...todos]);
    setTitle("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value; 
    setTitle(value);
  }

  function handleUpdate(id: string, value: string) {
    const temp = [...todos];
    const item = temp.find(item => item.id === id);
    if(item !== undefined) {
      item.title = value;
      setTodos(temp);
    }
  }

  function handleDelete(id: string) {
    const temp = todos.filter(item => item.id !== id);

    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input className="todoInput" value={title} onChange={ handleChange } />
        <input className="buttonCreate" type="submit" value="Create todo" onClick={ handleClick }/>
      </form>

      <div className="todosContainer">
        {
          todos.map((item)=> (
            <Todo 
              key={ item.id }
              item={ item }
              onUpdate={ handleUpdate }
              onDelete={ handleDelete }
            />
          ))
        }
      </div>
    </div>
  )
}