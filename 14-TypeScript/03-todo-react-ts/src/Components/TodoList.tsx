import React from 'react'
import Todo from '../Model/Todo'

interface TodoListProps {
  todos: Todo[],
  deleteTodo: (todoId: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos?.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={props.deleteTodo.bind(null, todo.id)}>DELETE</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
