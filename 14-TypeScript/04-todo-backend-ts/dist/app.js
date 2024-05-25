"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Mount Routes
const TodoR_1 = __importDefault(require("./routes/TodoR"));
app.use('/todos', TodoR_1.default);
app.get('/', (req, res) => {
    res.status(200).send('Hello from todo backend');
});
// Add Middlewares
app.use((err, req, res, next) => {
    res.status(404).json({
        success: false,
        error: err.message,
    });
});
// Listen App
app.listen(PORT, (err) => {
    if (err) {
        console.log('Error occured during building server');
        process.exit();
    }
    console.log(`Server is running on ${PORT}`);
});
