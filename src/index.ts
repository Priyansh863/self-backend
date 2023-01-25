import express from "express";
import cors from "cors";
import "./db/connection";
import userRoutes from "./routes/UserRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user",userRoutes);




app.listen(3001, () => {
    console.log("App is running at port 3005");

});
