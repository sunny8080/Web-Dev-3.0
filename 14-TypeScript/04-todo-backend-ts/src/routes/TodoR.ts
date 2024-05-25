import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controller/TodoC';

const router = express.Router();

// import controllers
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
