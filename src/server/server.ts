import express from "express";
import morgan from "morgan";

const { mongoose } = require("./database")

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/api/user", require("./routes/user.routes"))



// Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port ", app.get("port"));
});