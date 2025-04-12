import express from "express";
const app = express();
app.get('/', (req, res) => {
    console.log(req.method);
    res.json({ message: "it works" });
});
app.listen(3000);
