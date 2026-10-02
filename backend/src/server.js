import express from "express";

import notesRoutes from "./routes/notesRoutes.js"

import { connectDB } from "./config/db.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () =>{
    console.log("server started on port : 5001");
});


// g2cjhkg7cAsuZnvj

//mongodb+srv://<db_username>:g2cjhkg7cAsuZnvj@cluster0.pidgism.mongodb.net/?appName=Cluster0