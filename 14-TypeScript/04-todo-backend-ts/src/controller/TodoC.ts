import { RequestHandler } from 'express';
import Todo from '../models/Todo';

const todos: Todo[] = [];

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: todos,
  });
};

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  if (!text) {
    return res.status(404).json({
      success: false,
      error: 'Some fields are missing !!',
    });
  }

  const newTodo = new Todo(Math.random().toString(), text);
  todos.push(newTodo);

  res.status(201).json({
    success: true,
    data: newTodo,
  });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  if (!updatedText) {
    return res.status(404).json({
      success: false,
      error: 'Some fields are missing !!',
    });
  }

  const todoInd = todos.findIndex((todo) => todo.id === todoId);
  if (todoInd < 0) {
    throw new Error('Todo not found');
  }

  todos[todoInd].text = updatedText;

  res.status(200).json({
    success: true,
    data: todos[todoInd],
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoInd = todos.findIndex((todo) => todo.id === todoId);
  if (todoInd < 0) {
    throw new Error('Todo not found');
  }

  todos.splice(todoInd, 1);
  res.status(200).json({
    success: true,
    message: 'Todo deleted successfully',
  });
};
