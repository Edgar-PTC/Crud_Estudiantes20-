import e from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import limiter from "./src/middlewares/rateLimit.js"
//Importar las routes


const app = e();

app.use(limiter);

app.use(cors ({
    origin: ["http://localhost:5173"],
    credentials: true
}));

app.use(cookieParser());

app.use(e.json());

//Crear los endpoints


export default app;