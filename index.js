const express = require("express");
const app = express();

app.get("/express", (req, res) =>{
    res.send("from express & nodejs")
})

app.listen()
