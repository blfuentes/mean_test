import express from "express";
import morgan from "morgan";
import cors from "cors";

const { mongoose } = require("./database")

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}));

// Routes
app.use("/api/user", require("./routes/user.routes"))



// Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port ", app.get("port"));
});