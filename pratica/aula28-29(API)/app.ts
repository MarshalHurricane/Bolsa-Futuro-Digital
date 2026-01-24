import express from "express";
import router from "./src/router/Produto.router";

const app = express();
const PORT = 3000;

// OBRIGATÓRIO: Parênteses () para funcionar o JSON
app.use(express.json());

// Rotas
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app;