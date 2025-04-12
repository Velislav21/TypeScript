import { Router } from "express";
import { addTodo, getTodos, getTodo, updateTodo, removeTodo } from "../data.js";
const router = Router();

// function handlePostTodos(req: Request, res: Response) {

// }

router.post("/todos", (req, res) => {
    const text = req.body.text;

    const newTodo = addTodo(text);

    res.json({ message: "Todo added!", todo: newTodo });
});

router.get("/todos", (req, res) => {
    const todos = getTodos();

    res.json({ todos });
});
router.get("/todos/:id", (req, res) => {
    const todo = getTodo(+req.params.id);

    res.json({ todo });
});

router.patch("/todos/:id", (req, res) => {
    const updatedTodo = updateTodo(+req.params.id, req.body.text);
    res.json({ message: "Todo updated" });
});
router.delete("/todos/:id", (req, res) => {
    removeTodo(+req.params.id);
    res.json({ message: "Todo deleted" });
});

export default router;
