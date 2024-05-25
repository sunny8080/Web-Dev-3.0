"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
const todos = [];
const getTodos = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: todos,
    });
};
exports.getTodos = getTodos;
const createTodo = (req, res, next) => {
    const text = req.body.text;
    if (!text) {
        return res.status(404).json({
            success: false,
            error: 'Some fields are missing !!',
        });
    }
    const newTodo = new Todo_1.default(Math.random().toString(), text);
    todos.push(newTodo);
    res.status(201).json({
        success: true,
        data: newTodo,
    });
};
exports.createTodo = createTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
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
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
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
exports.deleteTodo = deleteTodo;
