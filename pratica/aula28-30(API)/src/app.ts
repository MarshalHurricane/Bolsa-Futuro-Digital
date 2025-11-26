import express from "express";
import router from "./router/Produto.router";

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/", router )

app.listen(port, () => console.log(`Server running at http://localhost:${PORT}`))


export default app;