import express from "express";
import cors from "cors";
import * as mongoose from "mongoose";
const userRoutes = require("./routes/user-routes.js");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/movie")
    .then(() => {
        console.log("connected to mongodb");
    })
    .catch((error) => {
        console.log("error connecting to mongodb", error);
    });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
    console.log("server started on port 5000");
});
