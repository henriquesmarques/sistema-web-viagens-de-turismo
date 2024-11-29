import express from "express";
import routes from "./scr/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e existe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
