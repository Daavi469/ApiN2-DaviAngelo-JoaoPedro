import express from "express";
import { router as apiRouter } from "./api.routes.js";
import { mdebug } from "../middlewares/debug.middleware.js";
import { notFound, errorHandler } from "../middlewares/errors.middleware.js";
import { mcors } from "../middlewares/mcors.middleware.js";
import path from "node:path";

const app = express();

// Registra Middlewares na Aplicação
app.use(mcors); // CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Middleware global para lidar com JSON
app.use(mdebug);

app.use("/api", apiRouter);

// Após todas as rotas, há o tratamento de erro para uma rota inexistente
app.use(notFound);

app.use(errorHandler);

// Configurações de EJS
app.set("view.engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views")); // Node.js 20.11+

// Middlewares
app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.json()); // Importante para rotas REST

// --- ROTA DE VIEW (EJS) ---
app.get("/home", (req, res) => {
    res.render("home"); // Renderiza o esqueleto da página
  });

export default app;