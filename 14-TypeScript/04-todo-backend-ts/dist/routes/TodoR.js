"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TodoC_1 = require("../controller/TodoC");
const router = express_1.default.Router();
// import controllers
router.get('/', TodoC_1.getTodos);
router.post('/', TodoC_1.createTodo);
router.put('/:id', TodoC_1.updateTodo);
router.delete('/:id', TodoC_1.deleteTodo);
exports.default = router;
