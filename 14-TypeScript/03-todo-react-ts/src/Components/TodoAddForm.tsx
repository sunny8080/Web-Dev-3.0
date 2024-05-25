import React, { useRef } from 'react'

type TodoAddFormProps = {
  addTodo: (todo: string) => void;
}


const TodoAddForm: React.FC<TodoAddFormProps> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current?.value;
    if (enteredTodo) {
      props.addTodo(enteredTodo);
      todoInputRef.current.value = "";
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor="">Todo Heading</label>
        <input type="text" id="todo-input" ref={todoInputRef} />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  )
}

export default TodoAddForm
