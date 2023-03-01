import { useState } from "react"
import { text } from "stream/consumers"

interface prop {
  item: {
    id: string
    title: string
    completed: boolean
  }

  onUpdate: (id: string, newVlaue: string)=> void
  onDelete: (id: string)=> void
}

export function Todo({ item , onUpdate, onDelete }: prop) {

  const [isEdit, setIsEdit]= useState(false);

  function FormEdit() {

    const [newVlaue, setNewVlaue] = useState(item.title);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.target.value;
      setNewVlaue(value);
    }

    function handleClickUpdateTodo() {
      onUpdate(item.id, newVlaue);
      setIsEdit(false);
    }

    return(
      <form className="todoUpdateForm" onSubmit={ handleSubmit }>
        <input className="todoInput" type="text" value={newVlaue} onChange={ handleChange }/>
        <button className="button" onClick={ handleClickUpdateTodo }>Update</button>
      </form>
    )
  }

  function TodoElement() {

    function handleClick() {}
    return(
      <div className="todoInfo">
        <span className="todoTitle"> {item.title} </span>
        <button className="button" onClick={ ()=> setIsEdit(true) }>Edit</button>
        <button className="buttonDelete" onClick={ (e)=> onDelete(item.id) }>Delete</button>
      </div>
    )
  }

  return (
    <div className="todo">
      {isEdit ?
        <FormEdit/>
      :
        <TodoElement/>
      }
    </div>
  )
}