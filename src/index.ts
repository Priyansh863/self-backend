import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors);
// app.use(express.json());


app.get("/", (req,res) => {
    console.log("first")
    res.send("Welcome!!");
})

app.listen(3005, () => {
    console.log("App is running at port 3005")

})