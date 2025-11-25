import express from "express";
import router from "./router/Produto.router";

const app = express();
app.use(express.json);
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))

app.use("/", router)


export default app;