const express = require("express");
const app = express()
const fs = require('fs');

app.use("/static", express.static(__dirname + "/public"))


app.get("/h", (req, res) => {

    res.sendFile(__dirname + "/public/view/index.html")
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/view/default.html")
})
app.listen(process.env.PORT || 5000, () => console.log("listening on port 50000"))