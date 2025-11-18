import { Express, Router } from "express";
import { Produto } from "./Produto";
import express , {Request , Response} from "express";


const estoque: Produto[] = [
    new Produto(13123, "rtx4060", 2000),
    new Produto(12372, "rtx4070", 3800),
    new Produto(14123, "rtx4080", 10500),
    new Produto(19832, "rtx4090", 16000),
]

