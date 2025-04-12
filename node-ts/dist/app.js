import express from "express";
import todoRoutes from "./routes/todo.js";
const app = express();
app.use(express.json());
app.use(todoRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'An error occured!' });
});
app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
