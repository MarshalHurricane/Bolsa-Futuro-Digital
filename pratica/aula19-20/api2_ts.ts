//por usar ts, necessario request/response
import express , { Request , Response } from "express";
import { Produto } from "./Produto";

const app = express();
app.use(express.json());

const produto1 = new Produto (13123, "rtx4060");
const produto2 = new Produto(12372, "rtx4070");
const produto3 = new Produto(14123, "rtx4080");
const produto4 = new Produto(19832, "rtx4090");


app.get("/", (req : Request, res : Response) => {
    res.send("")
})
