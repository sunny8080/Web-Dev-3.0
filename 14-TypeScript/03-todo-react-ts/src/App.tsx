import React, { useState } from 'react';
import './App.css';
import MyButton from './Components/MyButton';
import TodoList from './Components/TodoList';
import TodoAddForm from './Components/TodoAddForm';
import Todo from './Model/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: todo }
    ]);
  }

  const deleteTodo = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }


  return (
    <div className="App">
      <TodoAddForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      {/* <MyButton text='submit'></MyButton> */}
      {/* <MyButton text='submit' onClick={()=>alert('dasdf')}></MyButton> */}
    </div>
  );
}

export default App;
