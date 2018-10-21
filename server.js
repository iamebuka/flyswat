const express = require("express");
const app = express()
const fs = require('fs');
const server = require("http").createServer(app)


app.use("/static", express.static(__dirname + "/public"))

let readfile = (path) => { 
    
    
}
app.get("/h", (req, res) => {

    res.sendFile(__dirname + "/public/view/index.html")
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/view/default.html")
})
server.listen(3000, () => console.log("listening on port 3000"))